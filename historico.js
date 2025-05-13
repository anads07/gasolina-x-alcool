import React, { useEffect, useState } from 'react';
import { View, Text, ScrollView, StyleSheet, ImageBackground, SafeAreaView, TouchableOpacity } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function Historico({ navigation }) {
  const [historico, setHistorico] = useState([]);

  useEffect(() => {
    const carregarHistorico = async () => {
      try {
        const historicoSalvo = await AsyncStorage.getItem('historicoCombustivel');
        if (historicoSalvo) {
          setHistorico(JSON.parse(historicoSalvo));
        }
      } catch (error) {
        console.error('Erro ao carregar histórico:', error);
      }
    };

    carregarHistorico();
  }, []);

  const limparHistorico = async () => {
    try {
      await AsyncStorage.removeItem('historicoCombustivel');
      setHistorico([]);
    } catch (error) {
      console.error('Erro ao limpar histórico:', error);
    }
  };

  return (
    <ImageBackground source={require('./assets/fundo.jpg')} style={styles.background} resizeMode="cover">
      <SafeAreaView style={styles.safeArea}>
        <View style={styles.container}>
          <Text style={styles.titulo}>Histórico de Cálculos</Text>
          <View style={styles.historicoContainer}>
            <ScrollView style={styles.scrollView}>
              {historico.map((item, index) => (
                <View key={index} style={styles.item}>
                  <Text style={styles.dataTexto}>{item.data}</Text>
                  <Text style={styles.combustivelTexto}>Álcool: R$ {item.alcool}</Text>
                  <Text style={styles.combustivelTexto}>Gasolina: R$ {item.gasolina}</Text>
                  <Text style={styles.melhorTexto}>Melhor: {item.melhor}</Text>
                </View>
              ))}
            </ScrollView>
          </View>

          <TouchableOpacity style={styles.button} onPress={limparHistorico}>
            <Text style={styles.buttonText}>Limpar Histórico</Text>
          </TouchableOpacity>

          <TouchableOpacity style={[styles.button]} onPress={() => navigation.goBack()}>
            <Text style={styles.buttonText}>Voltar</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
  safeArea: {
    flex: 1,
  },
  container: {
    flex: 1,
    padding: 20,
    alignItems: 'center',
  },
  titulo: {
    fontFamily: 'Lora-Bold',
    fontSize: 28,
    color: '#000',
    marginBottom: 20,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  historicoContainer: {
    backgroundColor: '#164b86',
    borderRadius: 10,
    padding: 15,
    width: '100%',
    height: '45%',
  },
  scrollView: {
    flex: 1,
  },
  item: {
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    borderRadius: 8,
    padding: 10,
    marginBottom: 10,
  },
  dataTexto: {
    fontFamily: 'Lora-Regular',
    color: '#164b86',
    fontSize: 16,
  },
  melhorTexto: {
    fontFamily: 'Lora-Regular',
    color: '#164b86',
    fontSize: 16,
  },
  combustivelTexto: {
    fontFamily: 'Lora-Regular',
    color: '#000',
    fontSize: 16,
  },
  button: {
    backgroundColor: '#164b86',
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 30,
    marginTop: 15,
    width: '80%',
    alignItems: 'center',
    marginBottom: -10,
  },
  buttonText: {
    fontFamily: 'Lora-Regular',
    fontSize: 20,
    color: 'white',
    backgroundColor: '#164b86',
  },
});
