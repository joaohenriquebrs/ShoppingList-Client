import React, { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import {
    DropdownContainer,
    SelectedItem,
    DropdownList,
    DropdownListItem,
    TextMainSelect,
    CheckSpan,
    TextDropDownText,
    TitleBlockItem
} from './styles';
import { BakaryIcon, VegetableIcon, MeatIcon, FruitIcon, DrinkIcon, ArrowDownIcon } from 'assets';

const categories = [
    { label: 'Padaria', value: 'PADARIA', icon: BakaryIcon },
    { label: 'Legume', value: 'LEGUME', icon: VegetableIcon },
    { label: 'Carne', value: 'CARNE', icon: MeatIcon },
    { label: 'Fruta', value: 'FRUTA', icon: FruitIcon },
    { label: 'Bebida', value: 'BEBIDA', icon: DrinkIcon },
];

export default function CustomDropdownCategory() {
    const [selectedValue, setSelectedValue] = useState<string>('');
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);

    const handleSelect = (value: string) => {
        setSelectedValue(value);
        setIsOpen(false);
    };

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setIsOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [dropdownRef])

    return (
        <>
            <TitleBlockItem isOpen={isOpen}>Categoria</TitleBlockItem>

            <DropdownContainer ref={dropdownRef} isOpen={isOpen} onClick={() => setIsOpen((prev) => !prev)}>
                <SelectedItem>
                    <TextMainSelect>
                        {selectedValue
                            ? categories.find((item) => item.value === selectedValue)?.label
                            : 'Selecione'}
                    </TextMainSelect>
                    <Image src={ArrowDownIcon} alt='Ícone de uma seta apontada para baixo' />
                </SelectedItem>
                {isOpen && (
                    <DropdownList>
                        {categories.map((category) => (
                            <DropdownListItem
                                key={category.value}
                                onClick={() => handleSelect(category.value)}
                            >
                                <TextDropDownText>
                                    {category.icon && <Image src={category.icon} alt={category.label} width={16} height={16} />}
                                    {category.label}
                                </TextDropDownText>
                                {category.value === selectedValue && <CheckSpan>✔</CheckSpan>}
                            </DropdownListItem>
                        ))}
                    </DropdownList>
                )}
            </DropdownContainer>
        </>
    );
}
