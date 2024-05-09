//import liraries
import { StyleSheet, View, Dimensions, Image, Text } from 'react-native';
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../screens/main/Home';
import LockerService from '../screens/main/LockerService';
import Rent from '../screens/main/Rent';
import Advert from '../screens/main/Advert';
import Account from '../screens/main/Account';
import { icons, COLORS, FONTS, SIZES, } from '../constants';
import { scale } from '../utils/shared';

// create a component

const Tab = createBottomTabNavigator();
const BottomTabs = () => {
    return (
        <Tab.Navigator
        screenOptions={({ route }) => ({
            tabBarShowLabel: true,
            tabBarStyle: {
                height: SIZES.h1 * 1.9,
                backgroundColor: COLORS.white,
                borderTopWidth: 1,
                ...FONTS.h5a,
                color: 'red'
            },
            tabBarLabel: ({ focused }) => <Text style={{  ...FONTS.h5, fontSize: 13, color: focused ? COLORS.primary : COLORS.black, marginBottom: 5 }}>{route.name}</Text>,
            tabBarIcon: ({ focused, size, color }) => {
                let iconName;
                if (route.name === 'Home') {
                    iconName = focused ? icons.home : icons.home
                    size = focused ? scale(7) : scale(7),
                        color = focused ? COLORS.primary : COLORS.black
                }
                else if (route.name === 'Locker') {
                    iconName = focused ? icons.locker : icons.locker
                    size = focused ? scale(7) : scale(7),
                        color = focused ? COLORS.primary : COLORS.black
                }
                else if (route.name === 'Rent') {
                    iconName = focused ? icons.lock : icons.lock
                    size = focused ? scale(7) : scale(7),
                        color = focused ? COLORS.primary : COLORS.black
                } else if (route.name === 'Advert') {
                    iconName = focused ? icons.ads : icons.ads
                    size = focused ? scale(7) : scale(7),
                        color = focused ? COLORS.primary : COLORS.black
                }
                else if (route.name === 'Account') {
                    iconName = focused ? icons.account : icons.account
                    size = focused ? scale(7) : scale(7),
                        color = focused ? COLORS.primary : COLORS.black
                }
                return <Image 
                source={iconName}
                style={{ height: SIZES.h2, width: SIZES.h2, tintColor: color }} />
            },
            headerShown: false
        })}
    >
        <Tab.Screen name='Home' component={Home} />
        <Tab.Screen name='Locker' component={LockerService} />
        <Tab.Screen name='Rent' component={Rent} />
        <Tab.Screen name='Advert' component={Advert} />
        <Tab.Screen name='Account' component={Account} />


    </Tab.Navigator>
    );
};

const styles = StyleSheet.create({
    
})


export default BottomTabs;
