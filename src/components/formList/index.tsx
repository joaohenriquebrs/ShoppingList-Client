import React, { useState } from 'react';
import Image from 'next/image';
import {
    FormContainer,
    BlockItem,
    TitleBlockItem,
    InputNameItem,
    BlockAmount,
    InputAmountItem,
    BlockCategory,
    BlockPlusIcon,
    BlockInputsAmount,
    SelectAmountItem,
    OptionSelect,
    BlockPlusIconContent,
    MobileResposiveness,
    TopFormContainer,
    BottomFormContainer
} from './styles';
import { PlusIcon } from 'assets';
import CustomDropdownCategory from 'components/dropdownCategory';

export default function FormList() {
    const [focusStates, setFocusStates] = useState({
        item: false,
        amount: false,
        amountSelect: false,
        category: false,
    });

    const handleFocus = (field: string) => {
        setFocusStates((prev) => ({ ...prev, [field]: true }));
    };

    const handleBlur = (field: string) => {
        setFocusStates((prev) => ({ ...prev, [field]: false }));
    };

    return (
        <>
            <FormContainer>
                <BlockItem>
                    <TitleBlockItem isFocused={focusStates.item}>Item</TitleBlockItem>
                    <InputNameItem
                        isFocused={focusStates.item}
                        onFocus={() => handleFocus('item')}
                        onBlur={() => handleBlur('item')}
                    />
                </BlockItem>
                <BlockAmount>
                    <TitleBlockItem isFocused={focusStates.amount}>Quantidade</TitleBlockItem>
                    <BlockInputsAmount>
                        <InputAmountItem
                            isFocused={focusStates.amount}
                            onFocus={() => handleFocus('amount')}
                            onBlur={() => handleBlur('amount')}
                        />
                        <SelectAmountItem
                            isFocused={focusStates.amountSelect}
                            onFocus={() => handleFocus('amountSelect')}
                            onBlur={() => handleBlur('amountSelect')}
                        >
                            <OptionSelect value="Unidade">UN.</OptionSelect>
                            <OptionSelect value="Litro">L</OptionSelect>
                            <OptionSelect value="Quilograma">Kg</OptionSelect>
                        </SelectAmountItem>
                    </BlockInputsAmount>
                </BlockAmount>
                <BlockCategory>
                    <CustomDropdownCategory />
                </BlockCategory>
                <BlockPlusIcon>
                    <BlockPlusIconContent>
                        <Image src={PlusIcon} alt='Ícone de um símbolo de mais' />
                    </BlockPlusIconContent>
                </BlockPlusIcon>
            </FormContainer>
            <MobileResposiveness>
                <TopFormContainer>
                    <BlockItem>
                        <TitleBlockItem isFocused={focusStates.item}>Item</TitleBlockItem>
                        <InputNameItem
                            isFocused={focusStates.item}
                            onFocus={() => handleFocus('item')}
                            onBlur={() => handleBlur('item')}
                        />
                    </BlockItem>
                </TopFormContainer>
                <BottomFormContainer>
                    <BlockAmount>
                        <TitleBlockItem isFocused={focusStates.amount}>Quantidade</TitleBlockItem>
                        <BlockInputsAmount>
                            <InputAmountItem
                                isFocused={focusStates.amount}
                                onFocus={() => handleFocus('amount')}
                                onBlur={() => handleBlur('amount')}
                            />
                            <SelectAmountItem
                                isFocused={focusStates.amountSelect}
                                onFocus={() => handleFocus('amountSelect')}
                                onBlur={() => handleBlur('amountSelect')}
                            >
                                <OptionSelect value="Unidade">UN.</OptionSelect>
                                <OptionSelect value="Litro">L</OptionSelect>
                                <OptionSelect value="Quilograma">Kg</OptionSelect>
                            </SelectAmountItem>
                        </BlockInputsAmount>
                    </BlockAmount>
                    <BlockCategory>
                        <CustomDropdownCategory />
                    </BlockCategory>
                    <BlockPlusIcon>
                        <BlockPlusIconContent>
                            <Image src={PlusIcon} alt='Ícone de um símbolo de mais' />
                        </BlockPlusIconContent>
                    </BlockPlusIcon>
                </BottomFormContainer>
            </MobileResposiveness>
        </>
    );
}
