/**
<<<<<<< HEAD:src/App.tsx
 * Punto de entrada de la aplicacion PetCare
 * Define la navegación y estructura principal
 */

import React from 'react';
import {SafeAreaView, Text, StyleSheet} from 'react-native';


function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.text}>PetCare React is running</Text>
    </SafeAreaView>
=======
 * App root entry point.
 */

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import MainTabNavigator from './navigation/MainTabNavigator';

const App = () => {
  return (
    <NavigationContainer>
      <MainTabNavigator />
    </NavigationContainer>
>>>>>>> develop:src/App.js
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffffff',
  },
  text: {
    fontSize: 22,
    fontWeight: '600',
    color: '#000000',
  },
});

export default App;
