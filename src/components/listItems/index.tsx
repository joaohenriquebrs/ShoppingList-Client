import React, { useEffect, useState } from 'react';
import axios from 'axios';
import api from 'services/api';
import {
    ListItemsContainer
} from './styles';
import ItemUnit from 'components/itemUnit';
import { FruitIcon, BakaryIcon, DrinkIcon, MeatIcon, VegetableIcon } from 'assets';
import { StaticImageData } from 'next/image';

type IconName = 'FruitIcon' | 'BakaryIcon' | 'DrinkIcon' | 'MeatIcon' | 'VegetableIcon';

const iconMap: Record<IconName, StaticImageData> = {
    FruitIcon,
    BakaryIcon,
    DrinkIcon,
    MeatIcon,
    VegetableIcon,
};

interface Item {
    id: string;
    name: string;
    amount: string;
    category: string;
    iconName: IconName;
}

export default function ListItems() {
    const [items, setItems] = useState<Item[]>([]);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchItems = async () => {
            try {
                const response = await axios.get('http://localhost:3000/static/test.json');
                setItems(response.data);
            } catch (error) {
                setError('Erro ao carregar os itens. Tente novamente mais tarde.');
                console.error("chegou aqui", error);
            }
        };
        fetchItems();
    }, []);

    const handleDeleteItem = (id: string) => {
        setItems(prevItems => prevItems.filter(item => item.id !== id));
        console.log(`Item ${id} deletado.`);
    };

    if (error) {
        return <div>{error}</div>;
    }

    return (
        <ListItemsContainer>
            {items.map(item => {
                const IconComponent = iconMap[item.iconName];
                return (
                    <ItemUnit
                        key={item.id}
                        id={item.id}
                        name={item.name}
                        amount={item.amount}
                        category={item.category}
                        iconName={IconComponent}
                        onDelete={handleDeleteItem}
                    />
                );
            })}
        </ListItemsContainer>
    );
}
