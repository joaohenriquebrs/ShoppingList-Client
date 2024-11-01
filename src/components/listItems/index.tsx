import React, { useEffect, useState } from 'react';
import {
    ListItemsContainer
} from './styles';
import ItemUnit from 'components/itemUnit';
import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs, deleteDoc, doc } from 'firebase/firestore';

type IconName = 'FruitIcon' | 'BakaryIcon' | 'DrinkIcon' | 'MeatIcon' | 'VegetableIcon';

// Configuração do Firebase
const firebaseApp = initializeApp({
    apiKey: "AIzaSyDkoDawLnT2yAsh4aFfz89y3WyDj_yn6BQ",
    authDomain: "shoppinglistserver-87151.firebaseapp.com",
    projectId: "shoppinglistserver-87151",
    storageBucket: "shoppinglistserver-87151.firebasestorage.app",
    messagingSenderId: "456293514501",
    appId: "1:456293514501:web:2ca83f5eda3dbab6bccb6c"
});

interface Item {
    id: string;
    name: string;
    amount: string;
    category: string;
    unit: string;
}

export default function ListItems() {
    const [items, setItems] = useState<Item[]>([]);
    const [error, setError] = useState<string | null>(null);

    const db = getFirestore(firebaseApp);
    const itemsCollectionRef = collection(db, 'items');

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
                setError('Erro ao carregar os itens. Tente novamente mais tarde.');
                console.error("chegou aqui", error);
            }
        };
        fetchItems();
    }, [db]);

    const handleDeleteItem = async (id: string) => {
        try {
            const itemDoc = doc(db, 'items', id);

            await deleteDoc(itemDoc);

            setItems(prevItems => prevItems.filter(item => item.id !== id));
            console.log(`Item ${id} deletado.`);
        } catch (error) {
            console.error("Erro ao deletar o item:", error);
        }
    };

    return (
        <ListItemsContainer>
            {items.map(item => {
                return (
                    <ItemUnit
                        key={item.id}
                        id={item.id}
                        name={item.name}
                        amount={item.amount}
                        category={item.category}
                        unit={item.unit}
                        onDelete={handleDeleteItem}
                    />
                );
            })}
        </ListItemsContainer>
    );
}
