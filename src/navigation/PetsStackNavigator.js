import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import PetListScreen from '../screens/PetListScreen';
import PetDetailScreen from '../screens/PetDetailScreen';
import { COLORS } from '../constants/colors';

const Stack = createNativeStackNavigator();

const PetsStackNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="PetList"
      screenOptions={{
        headerStyle: {
          backgroundColor: COLORS.white,
        },
        headerShadowVisible: false,
        headerTintColor: COLORS.text,
        headerTitleStyle: {
          fontWeight: '800',
          fontSize: 20,
        },
        contentStyle: {
          backgroundColor: COLORS.background,
        },
      }}
    >
      <Stack.Screen
        name="PetList"
        component={PetListScreen}
        options={{ title: 'Mascotas' }}
      />
      <Stack.Screen
        name="PetDetail"
        component={PetDetailScreen}
        options={{ title: 'Detalle' }}
      />
    </Stack.Navigator>
  );
};

export default PetsStackNavigator;