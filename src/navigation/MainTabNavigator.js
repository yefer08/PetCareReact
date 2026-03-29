import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import PetsStackNavigator from './PetsStackNavigator';
import RegisterPetScreen from '../screens/RegisterPetScreen';
import TipsScreen from '../screens/TipsScreen';

const Tab = createBottomTabNavigator();

const MainTabNavigator = () => {
  return (
    <Tab.Navigator initialRouteName="Mascotas" screenOptions={{ headerShown: false }}>
      <Tab.Screen name="Mascotas" component={PetsStackNavigator} />
      <Tab.Screen name="Registrar" component={RegisterPetScreen} />
      <Tab.Screen name="Consejos" component={TipsScreen} />
    </Tab.Navigator>
  );
};

export default MainTabNavigator;
