import React, { useEffect, useState } from 'react';
import {
    MainContainer,
    ContentContainer,
    ProfileInfo,
    ActionButton,
    TitleProfile
} from './styles';
import Header from 'components/header';
import { collection, getDocs, getFirestore } from 'firebase/firestore';
import { firebaseApp } from 'libs/firebase';

export default function ProfilePage() {
    const [userName, setUserName] = useState('');
    const [userEmail, setUserEmail] = useState('');
    const [registrationDate, setRegistrationDate] = useState('');

    // Inicializa o Firestore e define a referência da coleção
    const db = getFirestore(firebaseApp);
    const usersCollectionRef = collection(db, 'users');

    useEffect(() => {
        const fetchUserData = async () => {
            try {
                const querySnapshot = await getDocs(usersCollectionRef);
                const firstUser = querySnapshot.docs[0]?.data();

                if (firstUser) {
                    setUserName(firstUser.name);
                    setUserEmail(firstUser.email || 'Não informado');
                    setRegistrationDate(firstUser.registrationDate || 'Data não disponível');
                }
            } catch (error) {
                console.error('Erro ao carregar os dados do usuário', error);
            }
        };
        fetchUserData();
    }, [db]);

    return (
        <MainContainer>
            <Header />
            <ContentContainer>
                <TitleProfile>Olá, {userName || 'Usuário'}</TitleProfile>
                <ProfileInfo>
                    <p><strong>Email:</strong> {userEmail}</p>
                    <p><strong>Data de Registro:</strong> {registrationDate}</p>
                </ProfileInfo>
                <ActionButton href='/'>Minha Lista de Compras</ActionButton>
            </ContentContainer>
        </MainContainer>
    );
}
