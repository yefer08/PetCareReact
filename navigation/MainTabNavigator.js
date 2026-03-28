import React from 'react';
import { Text } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import PetsStackNavigator from './PetsStackNavigator';
import RegisterPetScreen from '../screens/RegisterPetScreen';
import TipsScreen from '../screens/TipsScreen';

const Tab = createBottomTabNavigator();

const getTabEmoji = routeName => {
  if (routeName === 'Mascotas') {
    return '🐾';
  }

  if (routeName === 'Registrar') {
    return '➕';
  }

  if (routeName === 'Consejos') {
    return '💡';
  }

  return '📋';
};

const MainTabNavigator = () => (
  <Tab.Navigator
    screenOptions={({ route }) => ({
      headerShown: false,
      tabBarIcon: ({ color, size }) => (
        <Text style={{ color, fontSize: size }}>{getTabEmoji(route.name)}</Text>
      ),
    })}
  >
    <Tab.Screen name="Mascotas" component={PetsStackNavigator} />
    <Tab.Screen name="Registrar" component={RegisterPetScreen} />
    <Tab.Screen name="Consejos" component={TipsScreen} />
  </Tab.Navigator>
);

export default MainTabNavigator;
