import React from 'react';
import { Text } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import PetsStackNavigator from './PetsStackNavigator';
import RegisterPetScreen from '../screens/RegisterPetScreen';
import TipsScreen from '../screens/TipsScreen';
import { COLORS } from '../constants/colors';

const Tab = createBottomTabNavigator();

const getTabEmoji = (routeName, focused) => {
  if (routeName === 'Mascotas') {
    return focused ? '🐾' : '🐶';
  }

  if (routeName === 'Registrar') {
    return focused ? '➕' : '🩺';
  }

  if (routeName === 'Consejos') {
    return focused ? '💡' : '📘';
  }

  return '•';
};

const MainTabNavigator = () => {
  return (
    <Tab.Navigator
      initialRouteName="Mascotas"
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarHideOnKeyboard: true,
        tabBarActiveTintColor: COLORS.primary,
        tabBarInactiveTintColor: COLORS.textLight,
        tabBarStyle: {
          height: 72,
          paddingTop: 8,
          paddingBottom: 10,
          backgroundColor: COLORS.white,
          borderTopWidth: 0,
          shadowColor: COLORS.shadow,
          shadowOpacity: 0.08,
          shadowRadius: 10,
          shadowOffset: { width: 0, height: -2 },
          elevation: 10,
        },
        tabBarLabelStyle: {
          fontSize: 12,
          fontWeight: '700',
        },
        tabBarIcon: ({ focused }) => (
          <Text style={{ fontSize: focused ? 22 : 20 }}>
            {getTabEmoji(route.name, focused)}
          </Text>
        ),
      })}
    >
      <Tab.Screen name="Mascotas" component={PetsStackNavigator} />
      <Tab.Screen name="Registrar" component={RegisterPetScreen} />
      <Tab.Screen name="Consejos" component={TipsScreen} />
    </Tab.Navigator>
  );
};

export default MainTabNavigator;