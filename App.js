import React from 'react';
import { StyleSheet, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Entrada from './entrada';
import Calculadora from './calculadora';
import Resultado from './resultado';
import Historico from './historico';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Entrada" screenOptions={{
        headerShown: false,
        cardStyle: { backgroundColor: 'transparent' }
      }}>
        <Stack.Screen name="Entrada" component={Entrada} />
        <Stack.Screen name="Calculadora" component={Calculadora} />
        <Stack.Screen name="Resultado" component={Resultado} />
        <Stack.Screen name="Historico" component={Historico} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}