import React, { useEffect, useState } from 'react';
import {
  ListItemsContainer,
  ButtonDeleteSelected,
  ModalOverlay,
  ModalContainer,
  ModalContent,
  ModalText,
  ModalButtonContainer,
  CancelButton
} from './styles';
import ItemUnit from 'components/itemUnit';
import {
  getFirestore,
  collection,
  getDocs,
  deleteDoc,
  updateDoc,
  doc
} from 'firebase/firestore';
import { Item } from 'services/interfaces';
import { firebaseApp } from 'libs/firebase';

export default function ListItems() {
  // Estados para armazenar dados e controlar mensagens/modal
  const [items, setItems] = useState<Item[]>([]);
  const [selectedItems, setSelectedItems] = useState<string[]>([]);
  const [modalMessage, setModalMessage] = useState('');
  const [showModal, setShowModal] = useState(false);

  // Inicializa o Firestore e define a referência da coleção
  const db = getFirestore(firebaseApp);
  const itemsCollectionRef = collection(db, 'items');

  // useEffect para buscar os itens ao carregar o componente
  useEffect(() => {
    const fetchItems = async () => {
      try {
        const querySnapshot = await getDocs(itemsCollectionRef);
        const fetchedItems: Item[] = [];
        querySnapshot.forEach((doc) => {
          const data = doc.data();
          fetchedItems.push({
            id: doc.id,
            name: data.name,
            amount: data.amount,
            category: data.category,
            unit: data.unit
          } as Item);
        });
        setItems(fetchedItems);
      } catch (error) {
        setModalMessage(
          'Erro ao carregar os itens. Tente novamente mais tarde.'
        );
      }
    };
    fetchItems();
  }, [db, itemsCollectionRef]);

  // Função para gerenciar a seleção de checkboxes
  const handleCheckboxChange = (id: string, isChecked: boolean) => {
    setSelectedItems((prev) =>
      isChecked ? [...prev, id] : prev.filter((itemId) => itemId !== id)
    );
  };

  // Função para deletar um item específico
  const handleDeleteItem = async (id: string) => {
    try {
      const itemDoc = doc(db, 'items', id);
      await deleteDoc(itemDoc);
      setItems((prevItems) => prevItems.filter((item) => item.id !== id));
      setModalMessage('Item deletado com sucesso.');
      setShowModal(true);
    } catch (error) {
      setModalMessage('Erro ao deletar o item.');
    }
  };

  // Função para deletar todos os itens selecionados
  const handleDeleteSelectedItems = async () => {
    try {
      const deletePromises = selectedItems.map(async (itemId) => {
        const itemDoc = doc(db, 'items', itemId);
        await deleteDoc(itemDoc);
      });

      await Promise.all(deletePromises);

      setItems((prevItems) =>
        prevItems.filter((item) => !selectedItems.includes(item.id))
      );
      setSelectedItems([]);

      setShowModal(true);
      setModalMessage('Itens selecionados deletados.');
    } catch (error) {
      setModalMessage('Erro ao deletar os itens selecionados.');
    }
  };

  // Função para salvar edições feitas em um item
  const handleSaveEditFinal = async (item: Item) => {
    try {
      const itemDoc = doc(db, 'items', item.id);
      await updateDoc(itemDoc, {
        name: item.name,
        amount: item.amount,
        category: item.category,
        unit: item.unit
      });
      setItems((prevItems) =>
        prevItems.map((prevItem) => (prevItem.id === item.id ? item : prevItem))
      );
      setModalMessage('Item editado com sucesso.');
      setShowModal(true);
    } catch (error) {
      setModalMessage('Erro ao editar o item.');
      setShowModal(true);
    }
  };

  // Função para fechar o modal e resetar estados relacionados à edição
  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <>
      <ListItemsContainer>
        {/* Exibe o botão de exclusão se houver itens selecionados */}
        {selectedItems.length > 0 && (
          <ButtonDeleteSelected onClick={handleDeleteSelectedItems}>
            Excluir
          </ButtonDeleteSelected>
        )}
        {items.map((item) => {
          return (
            <ItemUnit
              key={item.id}
              id={item.id}
              name={item.name}
              amount={item.amount}
              category={item.category}
              unit={item.unit}
              onDelete={handleDeleteItem}
              onCheckboxChange={handleCheckboxChange}
              onEdit={handleSaveEditFinal}
            />
          );
        })}
      </ListItemsContainer>
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
