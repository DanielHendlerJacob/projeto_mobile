import React, { useState } from 'react';
import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    Alert,
    StyleSheet,
    ScrollView,
    KeyboardAvoidingView,
    Platform,
} from 'react-native';
import { CadDeServicoNav, } from '../navigation/HomeNavigator'; // ✅ Corrigido para o tipo correto
import firestore from '@react-native-firebase/firestore';

const CadastroDeServico = (props: CadDeServicoNav,) => { // ✅ Usando o tipo correto
    const [nomeServico, setNomeServico] = useState('');
    const [dataServico, setDataServico] = useState('');
    const [horaServico, setHoraServico] = useState('');
    const [observacoes, setObservacoes] = useState('');

    const cadastrarServico = async () => {
        if (!nomeServico || !dataServico || !horaServico) {
            Alert.alert('Erro', 'Por favor, preencha todos os campos obrigatórios.');
            return;
        }

        try {
            await firestore()
                .collection('servicos')
                .add({
                    nomeServico,
                    dataServico,
                    horaServico,
                    observacoes,
                });

            Alert.alert('Sucesso', 'Serviço agendado com sucesso!');
            props.navigation.goBack();
        } catch (error) {
            console.error('Erro ao agendar serviço:', error);
            Alert.alert('Erro', 'Não foi possível agendar o serviço. Tente novamente.');
        }
    };

    return (
        <KeyboardAvoidingView
            style={{ flex: 1, backgroundColor: '#FFEBEE' }}
            behavior={Platform.OS === 'ios' ? 'padding' : undefined}
        >
            <ScrollView contentContainerStyle={styles.cardContainer}>
                <Text style={styles.title}>🐾 Agendar Serviço</Text>

                <Text style={styles.label}>Nome do Serviço:</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Digite o nome do serviço"
                    placeholderTextColor="#888"
                    value={nomeServico}
                    onChangeText={setNomeServico}
                />

                <Text style={styles.label}>Data do Serviço:</Text>
                <TextInput
                    style={styles.input}
                    placeholder="DD/MM/AAAA"
                    placeholderTextColor="#888"
                    value={dataServico}
                    onChangeText={setDataServico}
                />

                <Text style={styles.label}>Hora do Serviço:</Text>
                <TextInput
                    style={styles.input}
                    placeholder="HH:MM"
                    placeholderTextColor="#888"
                    value={horaServico}
                    onChangeText={setHoraServico}
                />

                <Text style={styles.label}>Observações:</Text>
                <TextInput
                    style={[styles.input, { height: 80 }]}
                    placeholder="Observações adicionais"
                    placeholderTextColor="#888"
                    value={observacoes}
                    onChangeText={setObservacoes}
                    multiline
                />

                <View style={styles.buttonContainer}>
                    <TouchableOpacity style={styles.greenButton} onPress={cadastrarServico}>
                        <Text style={styles.buttonText}>Agendar</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.redButton}
                        onPress={() => {
                            setNomeServico('');
                            setDataServico('');
                            setHoraServico('');
                            setObservacoes('');
                        }}
                    >
                        <Text style={styles.buttonText}>Limpar</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </KeyboardAvoidingView>
    );
};

const styles = StyleSheet.create({
    cardContainer: {
        padding: 30,
        backgroundColor: '#ffffff',
        margin: 20,
        borderRadius: 20,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 6 },
        shadowOpacity: 0.1,
        shadowRadius: 8,
        elevation: 8,
        alignItems: 'stretch',
        top: 30,
    },
    title: {
        fontSize: 26,
        fontWeight: 'bold',
        color: '#D32F2F',
        textAlign: 'center',
        marginBottom: 30,
    },
    label: {
        fontSize: 16,
        color: '#D32F2F',
        fontWeight: '600',
        marginBottom: 6,
    },
    input: {
        height: 48,
        backgroundColor: '#FFEBEE',
        borderRadius: 10,
        paddingHorizontal: 12,
        fontSize: 16,
        borderWidth: 1,
        borderColor: '#FFCDD2',
        color: '#000',
        marginBottom: 16,
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginTop: 30,
    },
    greenButton: {
        backgroundColor: '#66BB6A',
        paddingVertical: 14,
        paddingHorizontal: 30,
        borderRadius: 30,
        elevation: 4,
    },
    redButton: {
        backgroundColor: '#EF5350',
        paddingVertical: 14,
        paddingHorizontal: 30,
        borderRadius: 30,
        elevation: 4,
    },
    buttonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
    },
});

export default CadastroDeServico;