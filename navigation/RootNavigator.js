import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import MainTabNavigator from './MainTabNavigator';

const RootNavigator = () => (
  <NavigationContainer>
    <MainTabNavigator />
  </NavigationContainer>
);

export default RootNavigator;
