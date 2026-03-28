import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import PetListScreen from '../screens/PetListScreen';
import PetDetailScreen from '../screens/PetDetailScreen';

const Stack = createNativeStackNavigator();

const PetsStackNavigator = () => (
  <Stack.Navigator initialRouteName="PetList">
    <Stack.Screen
      name="PetList"
      component={PetListScreen}
      options={{ title: 'Mascotas' }}
    />
    <Stack.Screen
      name="PetDetail"
      component={PetDetailScreen}
      options={{ title: 'Detalle mascota' }}
    />
  </Stack.Navigator>
);

export default PetsStackNavigator;
