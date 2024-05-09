//import liraries
import React, { Component, useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { COLORS } from '../../constants';
import { useNavigation } from '@react-navigation/native';
import NotificationModal from '../../components/common/NotificationModal';

// create a component
const Home = () => {
    const navigation = useNavigation()
    const [modalVisible, setModalVisible] = useState(false);

    const showModal = () => {
        setModalVisible(true);
    };

    const hideModal = () => {
        setModalVisible(false);
        navigation.navigate('AnnouncementScreen')
    };

    
    return (
        <View style={styles.container}>
         
            <TouchableOpacity>
            <Text>Home</Text>
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
export default Home;
