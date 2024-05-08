import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LockerService from '../screens/main/LockerService';
import LockerDetails from '../screens/main/LockerDetails';


const AppStack = () => {
    const Stack = createNativeStackNavigator();
    return (
        <Stack.Navigator initialRouteName='LockerService' screenOptions={{ headerShown: false }}>
            <Stack.Screen name='LockerService' component={LockerService} />
            <Stack.Screen name='LockerDetails' component={LockerDetails} />
        </Stack.Navigator>
    )
}

export default AppStack

const styles = StyleSheet.create({})