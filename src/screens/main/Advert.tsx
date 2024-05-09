//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { COLORS } from '../../constants';
import { useNavigation } from '@react-navigation/native';

// create a component
const Advert = () => {
    const navigation = useNavigation()
    return (
        <View style={styles.container}>
              <TouchableOpacity onPress={()=> navigation.navigate('AnnouncementScreen')}>
            <Text>Advert</Text>
            </TouchableOpacity>
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: COLORS.white
    },
});

//make this component available to the app
export default Advert;
