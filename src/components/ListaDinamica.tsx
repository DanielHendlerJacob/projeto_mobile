import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, FlatList, Button } from 'react-native';
import { styles } from '../styles/styles'; // Ajuste o caminho, se necessário
import { RootStackParamList } from '../navigation/HomeNavigator';
import { NativeStackScreenProps } from '@react-navigation/native-stack';


type ListaDinamicaProps = NativeStackScreenProps<RootStackParamList, 'ListaDinamica'>;


const ListaDinamica = ({ navigation }: ListaDinamicaProps) => {
  const [texto, setTexto] = useState('');
  const [itens, setItens] = useState<string[]>([]);
  const [fraseSelecionada, setFraseSelecionada] = useState<string | null>(null);

  const adicionarItem = () => {
    if (texto.trim() === '') return;
    setItens([...itens, texto]);
    setTexto('');
  };

  return (
    <View style={styles.tela}>
      {/* Campo de entrada */}
      <TextInput
        style={styles.caixa_texto}
        placeholder="Digite algo"
        placeholderTextColor="#888"
        value={texto}
        onChangeText={setTexto}
      />

      {/* Botão de adicionar */}
      <TouchableOpacity style={[styles.botao, { alignSelf: 'center' }]} onPress={adicionarItem}>
        <Text style={styles.texto_botao}>Adicionar</Text>
      </TouchableOpacity>

      {/* Lista de itens */}
      <FlatList
        data={itens}
        keyExtractor={(item, index) => index.toString()}
        style={{ marginTop: 20 }}
        contentContainerStyle={{ paddingHorizontal: 20 }}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => setFraseSelecionada(item)}>
            <View style={styles.card}>
              <Text style={{ fontSize: 18, padding: 10, color: 'black' }}>{item}</Text>
            </View>
          </TouchableOpacity>
        )}
      />

      {/* Frase selecionada */}
      {fraseSelecionada && (
        <View style={{ alignItems: 'center', marginTop: 20 }}>
          <Text style={styles.texto_positivo}>Selecionado: {fraseSelecionada}</Text>
        </View>
      )}  
      <View style={{ marginTop: 30, width: '60%', alignSelf: 'center' }}></View>
      <Button title="Voltar para TelaPrincipal" onPress={() => navigation.navigate('TelaPrincipal')} />
    </View>
  );      
};

export default ListaDinamica;
