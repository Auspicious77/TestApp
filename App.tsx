import React, { useEffect } from 'react';
import { View, Text, StatusBar, PermissionsAndroid } from 'react-native';

import AppStack from './src/navigation/AppStack';


const App: React.FC = () => {

  return (
    <>
      <StatusBar
        backgroundColor="white"
        barStyle="dark-content"
      />
      <AppStack />
    </>
  );
};

export default App;
