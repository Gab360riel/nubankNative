import React from 'react';

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import {Container, TabsContainer, TabItem, TabText} from './styles';

export default function Tabs({translateY}) {
  return (
    <Container
      style={{
        transform: [
          {
            translateY: translateY.interpolate({
              inputRange: [0, 380],
              outputRange: [0, 30],
              extrapolate: 'clamp',
            }),
          },
        ],
        opacity: translateY.interpolate({
          inputRange: [0, 380],
          outputRange: [1, 0.3],
          extrapolate: 'clamp',
        }),
      }}>
      <TabsContainer>
        <TabItem>
          <MaterialCommunityIcons name="account-plus" size={24} color="#fff" />
          <TabText>Indicar Amigos</TabText>
        </TabItem>
        <TabItem>
          <MaterialCommunityIcons
            name="message-outline"
            size={24}
            color="#fff"
          />
          <TabText>Cobrar</TabText>
        </TabItem>
        <TabItem>
          <MaterialCommunityIcons name="arrow-down" size={24} color="#fff" />
          <TabText>Depositar</TabText>
        </TabItem>
        <TabItem>
          <MaterialCommunityIcons name="arrow-up" size={24} color="#fff" />
          <TabText>Transferir</TabText>
        </TabItem>
        <TabItem>
          <MaterialCommunityIcons name="lock" size={24} color="#fff" />
          <TabText>Bloquear Cartão</TabText>
        </TabItem>
      </TabsContainer>
    </Container>
  );
}
