// src/components/itemUnit/index.tsx
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
import { DetailsItemIcon } from 'assets';

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
    iconName: StaticImageData;
    onDelete: (id: string) => void;
}

export default function ItemUnit({ id, name, amount, category, iconName, onDelete }: ItemUnitProps) {
    const [isChecked, setIsChecked] = useState(false);
    const { background, color } = categoryStyles[category];
    const [modalDelete, setModalDelete] = useState(false);

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
                    <AmountItem>{amount}</AmountItem>
                </DetailsItem>
            </LeftContainer>
            <RightContainer>
                <CategoryItem background={background} color={color}>
                    <Image src={iconName} alt={`Ícone representando ${category.toLowerCase()}`} />
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
