import React from 'react';
import { Text, View } from 'react-native';
import { styles } from '../styles/styles';

const Titulo = () => {
  return (
    <View>
      <Text style={styles.tituloPrincipal}>Cadastro Paciente</Text>
      <Text style={styles.titulo2}>Nome:</Text>
      <Text style={styles.titulo2}>Telefone:</Text>
    </View>
  );
};

export default Titulo;