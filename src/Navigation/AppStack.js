import {View, Text} from 'react-native';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from '../Screens/App/Home';
import Splash from '../Screens/Splash';
import AddQuiz from '../Screens/App/AddQuiz';
import TabNavigator from './TabNavigator';
import Profile from '../Screens/App/Profile';

const Stack = createNativeStackNavigator();

const AppStack = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Splash" component={Splash} />
      <Stack.Screen name="Main" component={TabNavigator} />
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="AddQuiz" component={AddQuiz} />
      <Stack.Screen name="Profile" component={Profile} />
    </Stack.Navigator>
  );
};

export default AppStack;
