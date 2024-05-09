import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LockerService from '../screens/main/LockerService';
import LockerDetails from '../screens/main/LockerDetails';
import BottomTabs from './BottomTabs';
import { NavigationContainer } from '@react-navigation/native';
import Notification from '../screens/main/Notification';


const AppStack = () => {
    const Stack = createNativeStackNavigator();
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name='Notification' component={Notification} />
            <Stack.Screen name='LockerDetails' component={LockerDetails} />
            <Stack.Screen name='BottomTabs' component={BottomTabs} />
        </Stack.Navigator>
    )
}

export default AppStack

const styles = StyleSheet.create({})