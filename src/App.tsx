/**
 * Punto de entrada de la aplicación PetCare
 * Define la navegación y estructura principal
 */

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from '@screens/HomeScreen';

const App: React.FC = () => {
  return (
    <NavigationContainer>
      <HomeScreen />
    </NavigationContainer>
  );
};

export default App;
