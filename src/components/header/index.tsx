import React from 'react';
import Image from 'next/image';
import {
    HeaderContainer,
    HeaderDesktop,
    HeaderMobile
} from './styles';
import { HeaderBackground, HeaderBackgroundMobile } from 'assets';
import { } from 'react-icons/fa';

export default function Header() {

    return (
        <HeaderContainer>
            <HeaderDesktop>
                <Image src={HeaderBackground} alt='Background header' layout='responsive' />
            </HeaderDesktop>
            <HeaderMobile>
                <Image src={HeaderBackgroundMobile} alt='Background header' layout='responsive' />
            </HeaderMobile>
        </HeaderContainer>
    );
}
