import { useLocalSearchParams } from 'expo-router/build/hooks';
import { Button, ImageBackground, StyleSheet, Text, View, ScrollView, } from 'react-native';
import { TextInput } from 'react-native-paper';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { PainelSubtitulo } from '../components/painel-subtitulo';
import React from 'react';
import { black } from 'react-native-paper/lib/typescript/styles/themes/v2/colors';
import { router } from 'expo-router';
import { PostOperacao } from '../api/operacaoapi';
import { IOperacao } from '../interfaces/operacoesinterface';



export default function OperacaoEstoqueScreen() {

    const horaAtual = new Date();
    const { tipo } = useLocalSearchParams();

    const operacao: IOperacao = {

        motivo: "Estragou",
        entradaSaida: "E",
        detalhes: [
            {
                produtoID: "15b6b2f9-7240-4ab2-ca93-08df15ba02b7",
                quantidade: 23,
                produtoNome: "Arroz",
                unidadeMedidaSigla: "Cx"
            },
            {
                produtoID: "4be0bd85-c4d0-442c-ca94-08df15ba02b7",
                quantidade: 48,
                produtoNome: "Feijão",
                unidadeMedidaSigla: "Cx"
            }

        ]
    }

    async function Confirmar() {
        const ok = await PostOperacao(operacao);
        if (ok) {
            router.back();
        }
    }

    return (
        <SafeAreaProvider>
            <View style={styles.container}>
                <ImageBackground
                    style={styles.fundo}
                    source={require('../../assets/images/fundo.jpg')}
                    resizeMode='cover'
                >
                    <PainelSubtitulo
                        texto={tipo == 'E' ? 'ENTRADA' : 'SAÍDA'}
                        corFundo={tipo == 'E' ? 'rgb(0,100,0)' : 'rgb(100,0,0)'}
                    />

                    <Text style={styles.label}>{horaAtual.toLocaleString()}</Text>

                    <Text style={styles.label}>Motivo:</Text>
                    <TextInput style={styles.input} />

                    <Button title='Procurar Produto' />

                    <PainelSubtitulo texto="DETALHES" />

                    <ScrollView style={styles.containerDetalhes}>
                        {
                            operacao.detalhes.map(detalhes => (
                                <View style={styles.produto} key={detalhes.produtoID}>
                                    <Text style={styles.label}>{detalhes.produtoNome}</Text>
                                    <Text style={styles.label}>{detalhes.quantidade}</Text>
                                </View>
                            ))
                        }
                    </ScrollView>

                    <button onClick={Confirmar} style={styles.botao} >Confirmar</button>



                </ImageBackground>
            </View>
        </SafeAreaProvider>

    );
}



const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: '#F5F7FA',
    },

    containerDetalhes: {
        flex: 1,
        backgroundColor: '#FFFFFF',
        borderWidth: 1,
        borderColor: '#E2E8F0',
        margin: 8,
        padding: 16,
        gap: 20,
        borderRadius: 16,
        elevation: 3,
    },

    botao: {
        backgroundColor: '#2563EB',
        paddingVertical: 14,
        paddingHorizontal: 20,
        borderRadius: 12,
        alignItems: 'center',
        justifyContent: 'center',
        elevation: 2,
        color:"white",
    },

    fundo: {
        flex: 1,
        width: '100%',
        padding: 16,
        gap: 16,
        backgroundColor: '#F5F7FA',
    },

    subTitulo: {
        color: '#FFFFFF',
        fontWeight: 'bold',
        fontSize: 18,
        textAlign: 'center',
        paddingVertical: 12,
        paddingHorizontal: 10,
    },

    fundoSubTituloCinza: {
        backgroundColor: '#334155',
        borderRadius: 10,
    },

    fundoSubTituloVerde: {
        backgroundColor: '#15803D',
        borderRadius: 10,
    },

    fundoSubTituloVermelho: {
        backgroundColor: '#B91C1C',
        borderRadius: 10,
    },

    label: {
        fontWeight: '600',
        fontSize: 14,
        color: '#334155',
        marginBottom: 6,
    },

    input: {
        backgroundColor: '#FFFFFF',
        borderWidth: 1,
        borderColor: '#CBD5E1',
        borderRadius: 10,
        paddingHorizontal: 12,
        paddingVertical: 10,
        fontSize: 16,
        color: '#0F172A',
    },

    produto: {
        backgroundColor: '#FFFFFF',
        borderColor: '#E2E8F0',
        borderWidth: 1,
        borderRadius: 12,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 14,
        marginVertical: 4,
        elevation: 1,
    }
    
});
