import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from '../Screens/App/Home';
import AddQuiz from '../Screens/App/AddQuiz';
import Icon from 'react-native-vector-icons/FontAwesome';
import {NavigationContainer} from '@react-navigation/native';
import AllQuiz from '../Screens/App/AllQuiz';
import Profile from '../Screens/App/Profile';

const Tab = createBottomTabNavigator();
const TabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        headerShown: false,
        tabBarIcon: ({color, size}) => {
          let iconName;
          if (route.name === 'Home') {
            iconName = 'home';
          } else if (route.name === 'All Quiz') {
            iconName = 'th-list';
          } else if (route.name === 'Add Quiz') {
            iconName = 'plus';
          } else if (route.name === 'Profile') {
            iconName = 'user';
          } else if (route.name === 'Explore') {
            iconName = 'compass';
          }

          return <Icon name={iconName} size={size} color={color} />;
        },

        activeTintColor: 'tomato',
        inactiveTintColor: 'gray',
      })}
      //   tabBarOptions={}
    >
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="All Quiz" component={AllQuiz} />
      <Tab.Screen name="Add Quiz" component={AddQuiz} />
      <Tab.Screen name="Explore" component={Home} />
      <Tab.Screen name="Profile" component={Profile} />
    </Tab.Navigator>
  );
};

export default TabNavigator;
