import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import DashboardScreen from '../screens/Dashboard';
import UserDetailsScreen from '../screens/UserDetails';

export type RootStackParamList = {
  Dashboard: undefined;
  UserDetails: { userId: number };
};

const Stack = createNativeStackNavigator<RootStackParamList>();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Dashboard" component={DashboardScreen}/>
        <Stack.Screen name="UserDetails" component={UserDetailsScreen} options={{title: 'User Details'}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
