import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import PetsStack from './PetsStack';
import RegisterPetScreen from '../screens/RegisterPetScreen';
import TipsScreen from '../screens/TipsScreen';

const Tab = createBottomTabNavigator();

const MainTabs = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Pets"
        component={PetsStack}
        options={{title: 'Mascotas'}}
      />
      <Tab.Screen
        name="Register"
        component={RegisterPetScreen}
        options={{title: 'Registrar'}}
      />
      <Tab.Screen
        name="Tips"
        component={TipsScreen}
        options={{title: 'Consejos'}}
      />
    </Tab.Navigator>
  );
};

export default MainTabs;