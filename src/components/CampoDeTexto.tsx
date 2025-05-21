import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, Alert } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../navigation/HomeNavigator';

type CampoDeTextoProps = NativeStackScreenProps<RootStackParamList, 'CampoDeTexto'>;

const CampoDeTexto = ({ navigation }: CampoDeTextoProps) => {
  const [texto, setTexto] = useState('');

  const handleSubmit = () => {
    Alert.alert('Texto digitado', texto);
    setTexto('');
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Digite algo"
        value={texto}
        onChangeText={setTexto}
      />
      <View style={styles.botao}>
        <Button title="Enviar" onPress={handleSubmit} />
      </View>
      <View style={styles.botao}>
        <Button title="Voltar" onPress={() => navigation.navigate('TelaPrincipal')} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center', // Centraliza verticalmente
    alignItems: 'center',     // Centraliza horizontalmente
    padding: 20,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    width: '80%',
    marginBottom: 20,
    paddingLeft: 10,
    backgroundColor: '#fff'
  },
  botao: {
    width: '60%',
    marginVertical: 10
  }
});

export default CampoDeTexto;
