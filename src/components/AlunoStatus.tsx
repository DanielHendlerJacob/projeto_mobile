import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../navigation/HomeNavigator';
import { styles as globalStyles } from '../styles/styles';

type AlunoStatusProps = NativeStackScreenProps<RootStackParamList, 'AlunoStatus'>;

const AlunoStatus = ({ route, navigation }: AlunoStatusProps) => {
  const { nome, nota1, nota2 } = route.params;
  const media = (nota1 + nota2) / 2;
  const aprovado = media >= 7;

  return (
    <View style={[globalStyles.tela, localStyles.container]}>
      <View style={[globalStyles.card, { padding: 20, width: '80%' }]}>
        <Text style={globalStyles.titulo_campos}>Aluno: {nome}</Text>
        <Text style={globalStyles.titulo_campos}>Média: {media.toFixed(1)}</Text>

        {aprovado ? (
          <>
            <Text style={globalStyles.titulo_campos}>✅ Aprovado</Text>
            <Text style={globalStyles.texto_positivo}>Parabéns! Você foi aprovado.</Text>
          </>
        ) : (
          <>
            <Text style={globalStyles.titulo_campos}>❌ Reprovado</Text>
            <Text style={globalStyles.texto_negativo}>Não desanime! Estude mais e tente novamente.</Text>
          </>
        )}

        <View style={localStyles.botao}>
          <Button title="Voltar" onPress={() => navigation.navigate('TelaPrincipal')} />
        </View>
      </View>
    </View>
  );
};

const localStyles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1
  },
  botao: {
    marginTop: 20,
    width: '100%'
  }
});

export default AlunoStatus;
