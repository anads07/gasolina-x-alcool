import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, ImageBackground, SafeAreaView } from 'react-native';

export default function Entrada({ navigation }) {
  return (
    <ImageBackground source={require('./assets/fundo.jpg')} style={styles.background} resizeMode="cover">
      <SafeAreaView style={styles.safeArea}>
        <View style={styles.container}>
          <Text style={styles.title}>Gasolina ou Álcool?</Text>
          <Image source={require('./assets/frentista1.png')} style={styles.image} />
          <Text style={styles.subtitle}>Descubra qual compensa abastecer</Text>
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate('Calculadora')}
          >
            <Text style={styles.buttonText}>Entrar</Text>
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
  title: {
    fontFamily: 'Lora-Bold',
    fontSize: 40,
    color: 'black',
    textAlign: 'center',
    marginBottom: 30,
    textShadowColor: 'rgba(0, 0, 0, 0.5)',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 3,
  },
  subtitle: {
    fontFamily: 'Lora-Regular',
    fontSize: 30,
    color: 'black',
    textAlign: 'center',
    marginVertical: 20,
    textShadowColor: 'rgba(0, 0, 0, 0.5)',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 2,
  },
  image: {
    width: 300,
    height: 300,
    resizeMode: 'contain',
  },
  button: {
    backgroundColor: '#164b86',
    paddingVertical: 15,
    paddingHorizontal: 40,
    borderRadius: 30,
    marginTop: 30,
  },
  buttonText: {
    fontFamily: 'Lora-Regular',
    fontSize: 25,
    color: 'white',
  },
});
