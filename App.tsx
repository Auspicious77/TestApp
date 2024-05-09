import React, { useEffect } from 'react';
import { View, Text, StatusBar, PermissionsAndroid } from 'react-native';

import AppStack from './src/navigation/AppStack';
import { NativeScreenContainer } from 'react-native-screens';
import { NavigationContainer } from '@react-navigation/native';
import { COLORS } from './src/constants';
import BottomTabs from './src/navigation/BottomTabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Notification from './src/screens/main/Notification';
import LockerDetails from './src/screens/main/LockerDetails';


const App: React.FC = () => {
  const Stack = createNativeStackNavigator();
  return (
    <View style={{ flex: 1 }}>
      <StatusBar
        backgroundColor={COLORS.primary}
        barStyle="light-content"
      />
      {/* <AppStack/>
      
      */}
      <NavigationContainer>
        <Stack.Navigator initialRouteName='BottomTabs' screenOptions={{ headerShown: false }}>
          <Stack.Screen name='BottomTabs' component={BottomTabs} />
          <Stack.Screen name='Notification' component={Notification} />
          <Stack.Screen name='LockerDetails' component={LockerDetails} />


        </Stack.Navigator>
      </NavigationContainer>
    </View>
  );
};

export default App;
