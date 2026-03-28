import React from 'react';
import { Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import PetListScreen from './screens/PetListScreen';
import PetDetailScreen from './screens/PetDetailScreen';
import RegisterPetScreen from './screens/RegisterPetScreen';
import TipsScreen from './screens/TipsScreen';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const PetsStack = () => (
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

const App = () => (
  <NavigationContainer>
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarIcon: ({ focused, color, size }) => {
          let emoji = '📋';
          if (route.name === 'Mascotas') {
            emoji = '🐾';
          } else if (route.name === 'Registrar') {
            emoji = '➕';
          } else if (route.name === 'Consejos') {
            emoji = '💡';
          }
          return <Text style={{ color, fontSize: size }}>{emoji}</Text>;
        },
      })}
    >
      <Tab.Screen name="Mascotas" component={PetsStack} />
      <Tab.Screen name="Registrar" component={RegisterPetScreen} />
      <Tab.Screen name="Consejos" component={TipsScreen} />
    </Tab.Navigator>
  </NavigationContainer>
);

export default App;
