import React from 'react';
import {
  MainContainer,
  ContentContainer,
  HeaderMainContent,
  TitleMainContent,
} from './style';
import Header from 'components/header';
import FormList from 'components/formList';
import ListItems from 'components/listItems';

export default function ShoppingList() {

  return (
    <MainContainer>
      <Header />
      <ContentContainer>
        <HeaderMainContent>
          <TitleMainContent>Lista de Compras</TitleMainContent>
          <FormList />
        </HeaderMainContent>
        <ListItems />
      </ContentContainer>
    </MainContainer>
  );
}
