import React from 'react';
import { NativeStackScreenProps, createNativeStackNavigator } from '@react-navigation/native-stack';
import LobbyScreen from '../layouts/Lobby';
import ClienteCadastro from '../layouts/ClienteCadastro';
import Login from '../layouts/Login';
import Menu from '../layouts/Menu';
import CadastroDeServico from '../layouts/CadastroDeServico';
import AnimalCadastro from '../layouts/AnimalCadastro';
import ProdutoCadastro from '../layouts/CadastroProduto'; // Importando a nova tela

// Definindo o tipo de parâmetros para a navegação
export type RootStackParamList = {
  Lobby: undefined;
  ClienteCadastro: undefined;
  Login: undefined;
  Menu: { clienteId: string };
  CadastroDeServico: { clienteId: string };
  AnimalCadastro: { clienteId: string };
  CadastroProduto: { clienteId: string }; // Adicionando o parâmetro de Produto
};

// Criando o navegador de pilha
const Stack = createNativeStackNavigator<RootStackParamList>();

const HomeNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="Lobby" screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Lobby" component={LobbyScreen} />
      <Stack.Screen name="ClienteCadastro" component={ClienteCadastro} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Menu" component={Menu} />
      <Stack.Screen name="CadastroDeServico" component={CadastroDeServico} />
      <Stack.Screen name="AnimalCadastro" component={AnimalCadastro} />
      <Stack.Screen name="CadastroProduto" component={ProdutoCadastro} />
    </Stack.Navigator>
  );
};

// Tipagens das props de navegação para cada tela
type LobbyProps = NativeStackScreenProps<RootStackParamList, 'Lobby'>;
type CadClientePropsNav = NativeStackScreenProps<RootStackParamList, 'ClienteCadastro'>;
type LoginPropsNav = NativeStackScreenProps<RootStackParamList, 'Login'>;
type MenuPropsNav = NativeStackScreenProps<RootStackParamList, 'Menu'>;
type CadDeServicoNav = NativeStackScreenProps<RootStackParamList, 'CadastroDeServico'>;
type AnimalCadPropsNav = NativeStackScreenProps<RootStackParamList, 'AnimalCadastro'>;
type ProdutoCadPropsNav = NativeStackScreenProps<RootStackParamList, 'CadastroProduto'>; // Tipagem da nova tela

export default HomeNavigator;
export type {
  LobbyProps,
  CadClientePropsNav,
  LoginPropsNav,
  MenuPropsNav,
  CadDeServicoNav,
  AnimalCadPropsNav,
  ProdutoCadPropsNav // Exportando a tipagem da nova tela
};
