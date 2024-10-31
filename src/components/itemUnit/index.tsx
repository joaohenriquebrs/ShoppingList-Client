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
    CategoryItemName
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
    name: string;
    amount: string;
    category: string;
    iconName: StaticImageData;
}

export default function ItemUnit({ name, amount, category, iconName }: ItemUnitProps) {
    const [isChecked, setIsChecked] = useState(false);
    const { background, color } = categoryStyles[category];

    const handleCheckboxChange = () => {
        setIsChecked((prev) => !prev);
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
                <ConfigurationItemButton>
                    <Image src={DetailsItemIcon} alt='Ícone de três pontos na vertical' />
                </ConfigurationItemButton>
            </RightContainer>
        </ItemUnitContainer>
    );
}
