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
    ButtonPlusIconContent,
    MobileResposiveness,
    TopFormContainer,
    BottomFormContainer,
    ErrorMessage,
    ModalOverlay,
    ModalContainer,
    ModalContent,
    ModalText,
    ModalButtonContainer,
    CancelButton,
} from './styles';
import { PlusIcon } from 'assets';
import CustomDropdownCategory from 'components/dropdownCategory';
import { initializeApp } from 'firebase/app';
import { getFirestore, collection, addDoc } from 'firebase/firestore';

// Configuração do Firebase
const firebaseApp = initializeApp({
    apiKey: "AIzaSyDkoDawLnT2yAsh4aFfz89y3WyDj_yn6BQ",
    authDomain: "shoppinglistserver-87151.firebaseapp.com",
    projectId: "shoppinglistserver-87151",
    storageBucket: "shoppinglistserver-87151.firebasestorage.app",
    messagingSenderId: "456293514501",
    appId: "1:456293514501:web:2ca83f5eda3dbab6bccb6c"
});

type Category = 'FRUTA' | 'PADARIA' | 'BEBIDA' | 'CARNE' | 'LEGUME';

const categoryIconMap: Record<Category, string> = {
    FRUTA: 'FruitIcon',
    PADARIA: 'BakeryIcon',
    BEBIDA: 'DrinkIcon',
    CARNE: 'MeatIcon',
    LEGUME: 'VegetableIcon',
};

export default function FormList() {
    const [focusStates, setFocusStates] = useState({
        item: false,
        amount: false,
        amountSelect: false,
        category: false,
    });
    const [item, setItem] = useState('');
    const [amount, setAmount] = useState('');
    const [unit, setUnit] = useState('Unidade');
    const [category, setCategory] = useState<Category | ''>('');
    const [itemError, setItemError] = useState(false);
    const [amountError, setAmountError] = useState(false);
    const [modalMessage, setModalMessage] = useState('');
    const [showModal, setShowModal] = useState(false);
    const db = getFirestore(firebaseApp);
    const itemsCollectionRef = collection(db, 'items');

    const handleFocus = (field: string) => {
        setFocusStates((prev) => ({ ...prev, [field]: true }));
    };

    const handleBlur = (field: string) => {
        setFocusStates((prev) => ({ ...prev, [field]: false }));
    };

    const handleSave = async () => {
        if (!item || !amount || !category) {
            setModalMessage('Por favor, preencha todos os campos.');
            setShowModal(true);
            return;
        }

        const data = {
            name: item,
            amount,
            unit,
            category
        };

        try {
            await addDoc(itemsCollectionRef, data);
            setModalMessage('Produto adicionado à lista.');
            setShowModal(true);
            setItem('');
            setAmount('');
            setUnit('Unidade');
            setCategory('');
        } catch (error) {
            console.error('Erro ao adicionar o item:', error);
            setModalMessage('Erro ao adicionar o item. Tente novamente mais tarde.');
            setShowModal(true);
        }
    };

    const handleCategorySelect = (value: string) => {
        setCategory(value as Category);
    };

    const handleItemChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        if (/^[A-Za-zÀ-ÿ\s.,'!]*$/.test(value)) {
            setItem(value);
            setItemError(false);
        } else {
            setItemError(true);
        }
    };

    const handleAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        if (/^\d*$/.test(value)) {
            setAmount(value);
            setAmountError(false);
        } else {
            setAmountError(true);
        }
    };

    const handleCloseModal = () => {
        setShowModal(false);
    };

    return (
        <>
            <FormContainer>
                <BlockItem>
                    <TitleBlockItem isFocused={focusStates.item}>Item</TitleBlockItem>
                    <InputNameItem
                        isFocused={focusStates.item}
                        value={item}
                        onChange={handleItemChange}
                        onFocus={() => handleFocus('item')}
                        onBlur={() => handleBlur('item')}
                    />
                    {itemError && <ErrorMessage>Permitido apenas letras</ErrorMessage>}
                </BlockItem>
                <BlockAmount>
                    <TitleBlockItem isFocused={focusStates.amount}>Quantidade</TitleBlockItem>
                    <BlockInputsAmount>
                        <InputAmountItem
                            isFocused={focusStates.amount}
                            value={amount}
                            onChange={handleAmountChange}
                            onFocus={() => handleFocus('amount')}
                            onBlur={() => handleBlur('amount')}
                        />
                        <SelectAmountItem
                            isFocused={focusStates.amountSelect}
                            value={unit}
                            onChange={(e) => setUnit(e.target.value)}
                            onFocus={() => handleFocus('amountSelect')}
                            onBlur={() => handleBlur('amountSelect')}
                        >
                            <OptionSelect value="Unidade">UN.</OptionSelect>
                            <OptionSelect value="Litro">L</OptionSelect>
                            <OptionSelect value="Quilograma">Kg</OptionSelect>
                        </SelectAmountItem>
                    </BlockInputsAmount>
                    {amountError && <ErrorMessage>Permitido apenas números</ErrorMessage>}
                </BlockAmount>
                <BlockCategory>
                    <CustomDropdownCategory onSelectCategory={handleCategorySelect} />
                </BlockCategory>
                <BlockPlusIcon>
                    <ButtonPlusIconContent onClick={handleSave}>
                        <Image src={PlusIcon} alt='Ícone de um símbolo de mais' />
                    </ButtonPlusIconContent>
                </BlockPlusIcon>
            </FormContainer>
            <MobileResposiveness>
                <TopFormContainer>
                    <BlockItem>
                        <TitleBlockItem isFocused={focusStates.item}>Item</TitleBlockItem>
                        <InputNameItem
                            isFocused={focusStates.item}
                            value={item}
                            onChange={(e) => setItem(e.target.value)}
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
                                value={amount}
                                onChange={(e) => setAmount(e.target.value)}
                                onFocus={() => handleFocus('amount')}
                                onBlur={() => handleBlur('amount')}
                            />
                            <SelectAmountItem
                                isFocused={focusStates.amountSelect}
                                value={unit}
                                onChange={(e) => setUnit(e.target.value)}
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
                        <CustomDropdownCategory onSelectCategory={handleCategorySelect} />
                    </BlockCategory>
                    <BlockPlusIcon>
                        <ButtonPlusIconContent onClick={handleSave}>
                            <Image src={PlusIcon} alt='Ícone de um símbolo de mais' />
                        </ButtonPlusIconContent>
                    </BlockPlusIcon>
                </BottomFormContainer>
            </MobileResposiveness>

            {showModal && (
                <ModalOverlay>
                    <ModalContainer>
                        <ModalContent>
                            <ModalText>{modalMessage}</ModalText>
                            <ModalButtonContainer>
                                <CancelButton onClick={handleCloseModal}>Fechar</CancelButton>
                            </ModalButtonContainer>
                        </ModalContent>
                    </ModalContainer>
                </ModalOverlay>
            )}
        </>
    );
}
