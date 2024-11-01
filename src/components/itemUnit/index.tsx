import React, { useState } from 'react';
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
    ConfirmButton
} from './styles';
import { DetailsItemIcon, FruitIcon, BakaryIcon, DrinkIcon, MeatIcon, VegetableIcon } from 'assets';

interface CategoryItemProps {
    background?: string;
    color?: string;
}

const categoryStyles: Record<string, CategoryItemProps> = {
    PADARIA: {
        background: '#211E12',
        color: '#BB9F3A',
    },
    FRUTA: {
        background: '#261A17',
        color: '#E07B67',
    },
    LEGUME: {
        background: '#1C2015',
        color: '#8CAD51',
    },
    BEBIDA: {
        background: '#1A1D23',
        color: '#7B94CB',
    },
    CARNE: {
        background: '#251622',
        color: '#DB5BBF',
    },
};

interface ItemUnitProps {
    id: string;
    name: string;
    amount: string;
    category: string;
    unit: string;
    onDelete: (id: string) => void;
}

export default function ItemUnit({ id, name, amount, category, unit, onDelete }: ItemUnitProps) {
    const [isChecked, setIsChecked] = useState(false);
    const { background, color } = categoryStyles[category];
    const [modalDelete, setModalDelete] = useState(false);

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

    let unitAdjusted;

    switch (unit) {
        case 'Unidade':
            unitAdjusted = 'unidades';
            break;
        case 'Litro':
            unitAdjusted = 'litros';
            break;
        case 'Quilograma':
            unitAdjusted = 'kg';
            break;
        default:
            unitAdjusted = 'unidades';
            break;
    }

    const handleCheckboxChange = () => {
        setIsChecked((prev) => !prev);
    };

    const handleModalDelete = () => {
        setModalDelete(true);
    };

    const handleCloseModal = () => {
        setModalDelete(false);
    };

    const handleConfirmDelete = () => {
        onDelete(id);
        setModalDelete(false);
    };

    return (
        <ItemUnitContainer isChecked={isChecked}>
            <LeftContainer>
                <CheckBoxContainer>
                    <InputCheckBox
                        type='checkbox'
                        id={`customCheckbox-${name}`}
                        checked={isChecked}
                        onChange={handleCheckboxChange}
                    />
                    <Label htmlFor={`customCheckbox-${name}`}></Label>
                </CheckBoxContainer>
                <DetailsItem>
                    <NameItem isChecked={isChecked}>{name}</NameItem>
                    <AmountItem>{amount.toLowerCase()} {unitAdjusted}</AmountItem>
                </DetailsItem>
            </LeftContainer>
            <RightContainer>
                <CategoryItem background={background} color={color}>
                    <Image src={currentIcon} alt={`Ícone representando ${category.toLowerCase()}`} />
                    <CategoryItemName color={color}>
                        {category.toLowerCase()}
                    </CategoryItemName>
                </CategoryItem>
                <ConfigurationItemButton onClick={handleModalDelete}>
                    <Image src={DetailsItemIcon} alt='Ícone de três pontos na vertical' />
                </ConfigurationItemButton>
            </RightContainer>

            {modalDelete && (
                <ModalOverlay>
                    <ModalContainer>
                        <ModalContent>
                            <ModalText>Tem certeza que deseja apagar o item "{name}"?</ModalText>
                            <ModalButtonContainer>
                                <CancelButton onClick={handleCloseModal}>Cancelar</CancelButton>
                                <ConfirmButton onClick={handleConfirmDelete}>Confirmar</ConfirmButton>
                            </ModalButtonContainer>
                        </ModalContent>
                    </ModalContainer>
                </ModalOverlay>
            )}
        </ItemUnitContainer>
    );
}
