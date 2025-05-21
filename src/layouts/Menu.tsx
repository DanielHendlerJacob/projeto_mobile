import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { MenuPropsNav } from '../navigation/HomeNavigator'; // Use a tipagem já criada

const Menu = ({ route, navigation }: MenuPropsNav) => {
  const { clienteId } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tela do Menu</Text>
      <Text style={styles.text}>Cliente ID: {clienteId}</Text>

      {/* Botão para Cadastro de Serviço */}
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('CadastroDeServico', { clienteId })}
      >
        <Text style={styles.buttonText}>Cadastro de Serviço</Text>
      </TouchableOpacity>

      {/* Botão para Cadastro de Animal */}
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('AnimalCadastro', { clienteId })}
      >
        <Text style={styles.buttonText}>Cadastro de Animal</Text>
      </TouchableOpacity>

      {/* Botão para Cadastro de Produto */}
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('CadastroProduto', { clienteId })} // Navegação para Cadastro de Produto
      >
        <Text style={styles.buttonText}>Cadastro de Produto</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#e8f0fe',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#37589b',
    marginBottom: 20,
  },
  text: {
    fontSize: 18,
    color: '#37589b',
    marginBottom: 40,
  },
  button: {
    backgroundColor: '#37589b',
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 10,
    marginVertical: 10,
    width: '100%',
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default Menu;
