import React, { useState } from 'react';
import {View,Text,TextInput,TouchableOpacity,StyleSheet,ImageBackground,SafeAreaView,KeyboardAvoidingView,Platform,Alert} from 'react-native';

export default function Calculadora({ navigation }) {
  const [alcool, setAlcool] = useState('');
  const [gasolina, setGasolina] = useState('');

  const formatarValor = (text) => {
    let valorFormatado = text.replace(/[^0-9,]/g, '');
    valorFormatado = valorFormatado.replace(',', '.');
    return valorFormatado;
  };

  const validarCampos = () => {
    if (!alcool || !gasolina) {
      Alert.alert('Atenção', 'Por favor, preencha ambos os campos');
      return false;
    }

    if (isNaN(parseFloat(alcool)) || isNaN(parseFloat(gasolina))) {
      Alert.alert('Valor inválido', 'Por favor, digite apenas números');
      return false;
    }

    if (parseFloat(alcool) <= 0 || parseFloat(gasolina) <= 0) {
      Alert.alert('Valor inválido', 'Os valores devem ser maiores que zero');
      return false;
    }

    return true;
  };

  const calcular = () => {
    if (!validarCampos()) return;

    const valorAlcool = parseFloat(formatarValor(alcool));
    const valorGasolina = parseFloat(formatarValor(gasolina));

    const resultado = valorAlcool / valorGasolina;
    navigation.navigate('Resultado', {
      melhor: resultado < 0.7 ? 'Álcool' : 'Gasolina',
      valores: {
        alcool: valorAlcool.toFixed(2),
        gasolina: valorGasolina.toFixed(2),
        razao: resultado.toFixed(3)
      }
    });
  };

  return (
    <ImageBackground source={require('./assets/fundo.jpg')} style={styles.background}>
      <SafeAreaView style={styles.safeArea}>
        <KeyboardAvoidingView
          behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
          style={styles.container}
        >
          <Text style={styles.title}>Insira os dados para o cálculo:</Text>

          <View style={styles.inputContainer}>
            <Text style={styles.label}>Preço do Álcool (R$):</Text>
            <TextInput
              style={styles.input}
              keyboardType="decimal-pad"
              placeholder="R$"
              placeholderTextColor="#999"
              value={alcool}
              onChangeText={(text) => setAlcool(text.replace(/[^0-9,]/g, ''))}
            />
          </View>

          <View style={styles.inputContainer}>
            <Text style={styles.label}>Preço da Gasolina (R$):</Text>
            <TextInput
              style={styles.input}
              keyboardType="decimal-pad"
              placeholder="R$"
              placeholderTextColor="#999"
              value={gasolina}
              onChangeText={(text) => setGasolina(text.replace(/[^0-9,]/g, ''))}
            />
          </View>

          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate('Historico')}
          >
            <Text style={styles.buttonText}>Ver Histórico</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.button}
            onPress={calcular}
          >
            <Text style={styles.buttonText}>Calcular</Text>
          </TouchableOpacity>
        </KeyboardAvoidingView>
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
    padding: 30,
  },
  title: {
    fontFamily: 'Lora-Bold',
    fontSize: 40,
    color: 'black',
    textAlign: 'center',
    marginBottom: 40,
    textShadowColor: 'rgba(0, 0, 0, 0.5)',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 2,
  },
  inputContainer: {
    marginBottom: 25,
  },
  label: {
    fontFamily: 'Lora-Regular',
    fontSize: 22,
    color: 'black',
    marginBottom: 10,
    textShadowColor: 'rgba(0, 0, 0, 0.67)',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 1,
  },
  input: {
    backgroundColor: 'rgba(204, 204, 204, 0.9)',
    borderRadius: 10,
    padding: 15,
    fontSize: 20,
    fontFamily: 'Lora-Regular',
    color: '#333',
  },
  button: {
    backgroundColor: '#164b86',
    paddingVertical: 15,
    paddingHorizontal: 40,
    borderRadius: 30,
    marginTop: 20,
    marginBottom: -10,
    width: '80%',
    alignItems: 'center',
    alignSelf: 'center',
  },
  buttonText: {
    fontFamily: 'Lora-Regular',
    fontSize: 20,
    color: 'white',
    textAlign: 'center',
    alignItems: 'center',
  },
});
