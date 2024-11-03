import { StaticImageData } from 'next/image';

export interface Item {
  id: string;
  name: string;
  amount: string;
  category: string;
  unit: string;
}

export interface CategoryItemProps {
  background?: string;
  color?: string;
}

export interface ItemUnitProps {
  id: string;
  name: string;
  amount: string;
  category: string;
  unit: string;
  onDelete: (id: string) => void;
  onCheckboxChange: (id: string, isChecked: boolean) => void;
  onEdit: (editedItem: Item) => void;
}

export interface Option {
  label: string;
  value: string;
  icon?: string | StaticImageData;
}

export interface CustomDropdownProps {
  title: string;
  options: Option[];
  selectedValue: string;
  onSelect: (value: string) => void;
}

export interface TitleBlockItemProps {
  isFocused: boolean;
}

export interface TextProps {
  size?: string;
  align?: string;
  bold?: boolean;
  semiBold?: boolean;
  medium?: boolean;
  regular?: boolean;
  primary?: boolean;
  secondary?: boolean;
  black?: boolean;
  white?: boolean;
  blue?: boolean;
  margin?: string;
  padding?: string;
  width?: string;
  alignSelf?: string;
  opacity?: number;
}
