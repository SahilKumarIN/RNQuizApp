import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {AuthProvider} from './context/AuthProvider';
import Navigation from './Navigation';

const App = () => {
  return (
    <AuthProvider>
      <NavigationContainer>
        <Navigation />
      </NavigationContainer>
    </AuthProvider>
  );
};

export default App;
