import React from 'react';
import Image from 'next/image';
import {
    HeaderContainer
} from './styles';
import { HeaderBackground } from 'assets';
import { } from 'react-icons/fa';

export default function Header() {

    return (
        <HeaderContainer>
            <Image src={HeaderBackground} alt='Background header' layout='responsive' />
        </HeaderContainer>
    );
}
