import React from 'react'; import { View, Text, Image, TouchableOpacity, StyleSheet, ImageBackground, SafeAreaView } from 'react-native'; import AsyncStorage from '@react-native-async-storage/async-storage';

export default function Resultado({ route, navigation }) {
  const { melhor, valores } = route.params;

  const salvarHistorico = async () => {
    try {
      const novoCalculo = {
        data: new Date().toLocaleString(),
        alcool: valores.alcool,
        gasolina: valores.gasolina,
        razao: valores.razao,
        melhor: melhor
      };
      
      const historicoAtual = await AsyncStorage.getItem('historicoCombustivel');
      let historico = historicoAtual ? JSON.parse(historicoAtual) : [];
      
      historico.unshift(novoCalculo); 

      if (historico.length > 20) {
        historico = historico.slice(0, 20);
      }
      
      await AsyncStorage.setItem('historicoCombustivel', JSON.stringify(historico));
    } catch (error) {
      console.error('Erro ao salvar histórico:', error);
    }
  };

  React.useEffect(() => {
    salvarHistorico();
  }, []);

  return (
    <ImageBackground source={require('./assets/fundo.jpg')} style={styles.background} resizeMode="cover">
      <SafeAreaView style={styles.safeArea}>
        <View style={styles.container}>
          <Text style={styles.resultText}>O melhor é usar {melhor}!</Text>
          
          <Image source={require('./assets/frentista2.png')} style={styles.image} />
          
          <TouchableOpacity 
            style={styles.button}
            onPress={() => navigation.navigate('Historico')}
          >
            <Text style={styles.buttonText}>Ver Histórico</Text>
          </TouchableOpacity>
          
          <TouchableOpacity 
            style={[styles.button]}
            onPress={() => navigation.navigate('Entrada')}
          >
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
    justifyContent: 'center',
  },
  safeArea: {
    flex: 1,
    justifyContent: 'center',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  resultText: {
    fontFamily: 'Lora-Bold',
    fontSize: 32,
    color: 'black',
    textAlign: 'center',
    marginBottom: 20,
    textShadowColor: 'rgba(0, 0, 0, 0.7)',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 3,
  },
  image: {
    width: 250,
    height: 250,
    resizeMode: 'contain',
    marginBottom: 30,
  },
  button: {
    backgroundColor: '#164b86',
    paddingVertical: 15,
    paddingHorizontal: 40,
    borderRadius: 30,
    marginBottom: 15,
    width: '80%',
    alignItems: 'center',
  },
  buttonText: {
    fontFamily: 'Lora-Regular',
    fontSize: 20,
    color: 'white',
    backgroundColor: '#164b86'
  },
});
