import React from 'react';

import logo from '~/assets/Nubank_Logo.png';

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import {Container, Top, Logo, Title} from './styles';

export default function Header() {
  return (
    <Container>
      <Top>
        <Logo source={logo} />
        <Title>Gabriel</Title>
      </Top>
      <MaterialCommunityIcons name="chevron-down" size={20} color="#fff" />
    </Container>
  );
}
