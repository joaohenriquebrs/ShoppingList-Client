import React from 'react';
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

const items = [
    { id: 1, name: 'Maçã', amount: '2 unidades', category: 'FRUTA', iconName: 'FruitIcon' as IconName },
    { id: 3, name: 'Pão Francês', amount: '1 unidade', category: 'PADARIA', iconName: 'BakaryIcon' as IconName },
    { id: 4, name: 'Leite', amount: '1 unidade', category: 'BEBIDA', iconName: 'DrinkIcon' as IconName },
    { id: 5, name: 'Brócolis', amount: '1 unidade', category: 'LEGUME', iconName: 'VegetableIcon' as IconName },
    { id: 6, name: 'Peito de Frango', amount: '1 unidade', category: 'CARNE', iconName: 'MeatIcon' as IconName },
    { id: 2, name: 'Mamão', amount: '1 unidade', category: 'FRUTA', iconName: 'FruitIcon' as IconName },
];

export default function ListItems() {
    return (
        <ListItemsContainer>
            {items.map(item => {
                const IconComponent = iconMap[item.iconName];
                return (
                    <ItemUnit
                        key={item.id}
                        name={item.name}
                        amount={item.amount}
                        category={item.category}
                        iconName={IconComponent}
                    />
                );
            })}
        </ListItemsContainer>
    );
}
