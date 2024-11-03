import React, { useState, useRef, useEffect } from 'react';
import Image, { StaticImageData } from 'next/image';
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
import { ArrowDownIcon } from 'assets';
import { CustomDropdownProps } from 'services/interfaces';

export default function CustomDropdown({
    title,
    options,
    selectedValue,
    onSelect,
}: CustomDropdownProps) {
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);

    // Fecha o dropdown e registra o item selecionado
    const handleSelect = (value: string) => {
        onSelect(value);
        setIsOpen(false);
    };

    // Fecha o dropdown ao clicar fora dele
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
    }, []);

    return (
        <>
            <TitleBlockItem isOpen={isOpen}>{title}</TitleBlockItem>
            <DropdownContainer ref={dropdownRef} isOpen={isOpen} onClick={() => setIsOpen((prev) => !prev)}>
                <SelectedItem>
                    <TextMainSelect>
                        {selectedValue
                            ? options.find((item) => item.value === selectedValue)?.label
                            : 'Selecione'}
                    </TextMainSelect>
                    <Image src={ArrowDownIcon} alt='Ícone de uma seta apontada para baixo' />
                </SelectedItem>

                {isOpen && (
                    <DropdownList>
                        {options.map((option) => (
                            <DropdownListItem key={option.value} onClick={() => handleSelect(option.value)}>
                                <TextDropDownText>
                                    {option.icon && <Image src={option.icon} alt={option.label} width={16} height={16} />}
                                    {option.label}
                                </TextDropDownText>
                                {option.value === selectedValue && <CheckSpan>✔</CheckSpan>}
                            </DropdownListItem>
                        ))}
                    </DropdownList>
                )}
            </DropdownContainer>
        </>
    );
}
