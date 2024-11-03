import React, { useState, useEffect } from 'react';
import Image, { StaticImageData } from 'next/image';
import {
  ItemUnitContainer,
  LeftContainer,
  RightContainer,
  CheckBoxContainer,
  InputCheckBox,
  Label,
  DetailsItem,
  NameItem,
  AmountItem,
  ConfigurationItemButton,
  CategoryItem,
  CategoryItemName,
  ModalOverlay,
  ModalContainer,
  ModalContent,
  ModalText,
  ModalButtonContainer,
  CancelButton,
  ConfirmButton,
  InputEditItem,
  BlockTrace
} from './styles';
import {
  DetailsItemIcon,
  FruitIcon,
  BakaryIcon,
  DrinkIcon,
  MeatIcon,
  VegetableIcon
} from 'assets';
import { Item, CategoryItemProps, ItemUnitProps } from 'services/interfaces';

// Define estilos específicos de cada categoria para serem aplicados dinamicamente
const categoryStyles: Record<string, CategoryItemProps> = {
  PADARIA: { background: '#211E12', color: '#BB9F3A' },
  FRUTA: { background: '#261A17', color: '#E07B67' },
  LEGUME: { background: '#1C2015', color: '#8CAD51' },
  BEBIDA: { background: '#1A1D23', color: '#7B94CB' },
  CARNE: { background: '#251622', color: '#DB5BBF' }
};

// Componente principal para renderizar um item da lista, com capacidade de edição e deleção
export default function ItemUnit({
  id,
  name,
  amount,
  category,
  unit,
  onCheckboxChange,
  onEdit
}: ItemUnitProps) {
  const { background, color } = categoryStyles[category];
  const [isChecked, setIsChecked] = useState(false); // Estado para gerenciar se o item está selecionado
  const [modalEdit, setModalEdit] = useState(false); // Estado para exibir/ocultar o modal de edição
  const [editedItem, setEditedItem] = useState<Item | null>(null); // Estado para armazenar o item em edição

  // Atualiza o item editável quando suas props mudam
  useEffect(() => {
    setEditedItem({ id, name, amount, category, unit });
  }, [id, name, amount, category, unit]);

  // Define o ícone com base na categoria do item
  let currentIcon: StaticImageData;
  switch (category) {
    case 'FRUTA':
      currentIcon = FruitIcon;
      break;
    case 'PADARIA':
      currentIcon = BakaryIcon;
      break;
    case 'LEGUME':
      currentIcon = VegetableIcon;
      break;
    case 'BEBIDA':
      currentIcon = DrinkIcon;
      break;
    case 'CARNE':
      currentIcon = MeatIcon;
      break;
    default:
      currentIcon = FruitIcon;
      break;
  }

  // Ajusta a unidade de medida conforme o valor da prop 'unit'
  let unitAdjusted;
  switch (unit) {
    case 'UNIDADE':
      unitAdjusted = amount === '1' ? 'unidade' : 'unidades';
      break;
    case 'LITRO':
      unitAdjusted = amount === '1' ? 'litro' : 'litros';
      break;
    case 'QUILOGRAMA':
      unitAdjusted = 'kg';
      break;
    default:
      unitAdjusted = amount === '1' ? 'unidade' : 'unidades';
      break;
  }

  // Lida com a mudança do estado do checkbox
  const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const checked = event.target.checked;
    setIsChecked(checked);
    onCheckboxChange(id, checked);
  };

  // Abre o modal de edição
  const handleOpenModalEdit = () => {
    setModalEdit(true);
  };

  // Fecha o modal de edição
  const handleCloseModalEdit = () => {
    setModalEdit(false);
  };

  // Salva as alterações feitas no item editável
  const handleSaveEdit = () => {
    if (editedItem) {
      onEdit(editedItem); // Chama a função de edição passada por prop
    }
    handleCloseModalEdit();
  };

  return (
    <>
      <ItemUnitContainer isChecked={isChecked}>
        <LeftContainer>
          <CheckBoxContainer>
            <InputCheckBox
              type="checkbox"
              id={`customCheckbox-${name}`}
              checked={isChecked}
              onChange={handleCheckboxChange}
            />
            <Label htmlFor={`customCheckbox-${name}`}></Label>
          </CheckBoxContainer>
          <DetailsItem>
            <NameItem isChecked={isChecked}>
              <BlockTrace isChecked={isChecked}>{name}</BlockTrace>
            </NameItem>
            <AmountItem>
              {amount.toLowerCase()} {unitAdjusted}
            </AmountItem>
          </DetailsItem>
        </LeftContainer>
        <RightContainer>
          <CategoryItem background={background} color={color}>
            <Image
              src={currentIcon}
              alt={`Ícone representando ${category.toLowerCase()}`}
            />
            <CategoryItemName color={color}>
              {category.toLowerCase()}
            </CategoryItemName>
          </CategoryItem>
          <ConfigurationItemButton
            onClick={!isChecked ? handleOpenModalEdit : undefined} // Impede a edição se estiver selecionado no checkbox
            isDisabled={isChecked}
          >
            <Image
              src={DetailsItemIcon}
              alt="Ícone de três pontos na vertical"
            />
          </ConfigurationItemButton>
        </RightContainer>
      </ItemUnitContainer>

      {/* Modal para editar o item */}
      {modalEdit && editedItem && (
        <ModalOverlay>
          <ModalContainer>
            <ModalContent>
              <ModalText>Editar item:</ModalText>
              <InputEditItem
                type="text"
                value={editedItem.name}
                onChange={(e) =>
                  setEditedItem({ ...editedItem, name: e.target.value })
                }
              />
              <InputEditItem
                type="text"
                value={editedItem.amount}
                onChange={(e) =>
                  setEditedItem({ ...editedItem, amount: e.target.value })
                }
              />
              <InputEditItem
                type="text"
                value={editedItem.unit}
                onChange={(e) =>
                  setEditedItem({ ...editedItem, unit: e.target.value })
                }
              />
              <ModalButtonContainer>
                <CancelButton onClick={handleCloseModalEdit}>
                  Cancelar
                </CancelButton>
                <ConfirmButton onClick={handleSaveEdit}>Salvar</ConfirmButton>
              </ModalButtonContainer>
            </ModalContent>
          </ModalContainer>
        </ModalOverlay>
      )}
    </>
  );
}
