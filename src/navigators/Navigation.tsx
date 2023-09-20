import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { Movie } from '../interfaces/movieDbInterface';
import { Detail } from '../screens/Detail';
import { Home } from '../screens/Home';

export type RootStackParms = {
  HomeScreen: undefined;
  DetailScreen: Movie; 
}

const Stack = createStackNavigator<RootStackParms>();

export const Navigation = () => {
  return (
    <Stack.Navigator
    screenOptions={{
      headerShown: false,
      cardStyle:{
        backgroundColor: 'white'
      }
    }}
    >
      <Stack.Screen name="HomeScreen" component={Home} />
      <Stack.Screen name="DetailScreen" component={Detail} />
    </Stack.Navigator>
  );
}