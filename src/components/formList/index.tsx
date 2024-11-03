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
import { getFirestore, collection, addDoc } from 'firebase/firestore';
import { BakaryIcon, VegetableIcon, MeatIcon, FruitIcon, DrinkIcon } from 'assets';
import CustomDropdown from 'components/customDropdown';
import { firebaseApp } from 'libs/firebase';

// Opções de unidades e categorias para seleção, passando por prop para o customDropdown
const units = [
    { label: 'UN.', value: 'UNIDADE' },
    { label: 'L', value: 'LITRO' },
    { label: 'Kg.', value: 'QUILOGRAMA' },
];

const categories = [
    { label: 'Padaria', value: 'PADARIA', icon: BakaryIcon },
    { label: 'Legume', value: 'LEGUME', icon: VegetableIcon },
    { label: 'Carne', value: 'CARNE', icon: MeatIcon },
    { label: 'Fruta', value: 'FRUTA', icon: FruitIcon },
    { label: 'Bebida', value: 'BEBIDA', icon: DrinkIcon },
];

type Category = 'FRUTA' | 'PADARIA' | 'BEBIDA' | 'CARNE' | 'LEGUME';

export default function FormList() {
    // Estados para controlar o formulário, incluindo valores e mensagens de erro
    const [focusStates, setFocusStates] = useState({ item: false, amount: false, amountSelect: false, category: false });
    const [item, setItem] = useState('');
    const [amount, setAmount] = useState('');
    const [unit, setUnit] = useState('UNIDADE');
    const [category, setCategory] = useState<Category | ''>('');
    const [itemError, setItemError] = useState(false);
    const [amountError, setAmountError] = useState(false);
    const [modalMessage, setModalMessage] = useState('');
    const [showModal, setShowModal] = useState(false);
    const db = getFirestore(firebaseApp);
    const itemsCollectionRef = collection(db, 'items');

    // Atualiza o estado de foco para estilização condicional dos campos
    const handleFocus = (field: string) => {
        setFocusStates((prev) => ({ ...prev, [field]: true }));
    };

    const handleBlur = (field: string) => {
        setFocusStates((prev) => ({ ...prev, [field]: false }));
    };

    // Função para salvar o item no Firestore e exibir mensagem de sucesso/erro
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
            setItem(''); // Reseta os campos após salvar
            setAmount('');
            setUnit('Unidade');
            setCategory('');
        } catch (error) {
            setModalMessage('Erro ao adicionar o item. Tente novamente mais tarde.');
            setShowModal(true);
        }
    };

    // Define a categoria selecionada a partir do dropdown
    const handleCategorySelect = (value: string) => {
        setCategory(value as Category);
    };

    // Valida e atualiza o campo de nome do item
    const handleItemChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        if (/^[A-Za-zÀ-ÿ\s.,'!]*$/.test(value)) {
            setItem(value);
            setItemError(false);
        } else {
            setItemError(true);
        }
    };

    // Valida e atualiza o campo de quantidade
    const handleAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        if (/^\d*$/.test(value)) {
            setAmount(value);
            setAmountError(false);
        } else {
            setAmountError(true);
        }
    };

    // Fecha o modal e, se um produto foi adicionado, recarrega a página
    const handleCloseModal = () => {
        setShowModal(false);

        if (modalMessage === "Produto adicionado à lista.") {
            setTimeout(() => {
                window.location.reload();
            }, 500);
        }
    };

    return (
        <>
            <FormContainer>
                {/* Bloco de entrada para o nome do item */}
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

                {/* Bloco de entrada para a quantidade e unidade */}
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
                        <CustomDropdown
                            title=""
                            options={units}
                            selectedValue={unit}
                            onSelect={setUnit}
                        />
                    </BlockInputsAmount>
                    {amountError && <ErrorMessage>Permitido apenas números</ErrorMessage>}
                </BlockAmount>

                {/* Bloco de seleção de categoria */}
                <BlockCategory>
                    <CustomDropdown
                        title="Categoria"
                        options={categories}
                        selectedValue={category}
                        onSelect={handleCategorySelect}
                    />
                </BlockCategory>

                {/* Botão para salvar o item */}
                <BlockPlusIcon>
                    <ButtonPlusIconContent onClick={handleSave}>
                        <Image src={PlusIcon} alt='Ícone de um símbolo de mais' />
                    </ButtonPlusIconContent>
                </BlockPlusIcon>
            </FormContainer>

            {/* Layout responsivo para mobile */}
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
                            <CustomDropdown
                                title="Unidade"
                                options={units}
                                selectedValue={unit}
                                onSelect={setUnit}
                            />
                        </BlockInputsAmount>
                    </BlockAmount>
                    <BlockCategory>
                        <CustomDropdown
                            title="Categoria"
                            options={categories}
                            selectedValue={category}
                            onSelect={handleCategorySelect}
                        />
                    </BlockCategory>
                    <BlockPlusIcon>
                        <ButtonPlusIconContent onClick={handleSave}>
                            <Image src={PlusIcon} alt='Ícone de um símbolo de mais' />
                        </ButtonPlusIconContent>
                    </BlockPlusIcon>
                </BottomFormContainer>
            </MobileResposiveness>

            {/* Modal para exibir mensagens de sucesso/erro */}
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
