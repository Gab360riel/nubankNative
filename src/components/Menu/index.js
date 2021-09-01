import React from 'react';

import QRCode from 'react-native-qrcode';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import {
  Container,
  Code,
  Nav,
  NavItem,
  NavText,
  SignOutButton,
  SignOutButtonText,
} from './styles';

export default function Menu({translateY}) {
  return (
    <Container
      style={{
        opacity: translateY.interpolate({
          inputRange: [0, 150],
          outputRange: [0, 1],
        }),
      }}>
      <Code>
        <QRCode
          value="https://www.linkedin.com/in/gabriel-deciomo-martins-6468b91b0/"
          size={100}
          fgColor="#fff"
          bgColor="#8b10ae"
        />
      </Code>

      <Nav>
        <NavItem>
          <MaterialCommunityIcons
            name="help-circle-outline"
            size={20}
            color="#fff"
          />
          <NavText>Me ajuda</NavText>
        </NavItem>
        <NavItem>
          <MaterialCommunityIcons name="account" size={20} color="#fff" />
          <NavText>Perfil</NavText>
        </NavItem>
        <NavItem>
          <MaterialCommunityIcons
            name="credit-card-outline"
            size={20}
            color="#fff"
          />
          <NavText>Configurar Cartão</NavText>
        </NavItem>
        <NavItem>
          <MaterialCommunityIcons name="cellphone" size={20} color="#fff" />
          <NavText>Configurações do App</NavText>
        </NavItem>
      </Nav>

      <SignOutButton onPress={() => {}}>
        <SignOutButtonText>SAIR DO APP</SignOutButtonText>
      </SignOutButton>
    </Container>
  );
}
