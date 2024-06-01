import React from 'react';
import {useAuth} from './context/AuthProvider';
import AuthStack from './Navigation/AuthStack';
import AppStack from './Navigation/AppStack';

const Navigation = () => {
  const {user} = useAuth();
  return user ? <AuthStack /> : <AppStack />;
};

export default Navigation;
