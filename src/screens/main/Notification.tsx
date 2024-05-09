import React from 'react';
import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity } from 'react-native';
import LockerCard from '../../components/common/LockerCard';
import { COLORS, SIZES, FONTS, icons, images } from '../../constants';
import { scale } from '../../utils/shared';
import { useNavigation } from '@react-navigation/native';
import { SCREEN_HEIGHT } from '../../constants/theme';

const Notification = ({}) => {
    const navigation = useNavigation()

    console.log('Im here.......................................')
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Image
                    source={images.apartment2}
                    style={{ height: SIZES.height * 0.22, width: SIZES.width }}
                />
                <TouchableOpacity style={styles.button1} onPress={() => navigation.goBack()}>
                    <Image
                        source={icons.xcancel}
                        style={{ height: 18, width: 18, tintColor: COLORS.black, opacity: 1 }}
                    />
                </TouchableOpacity>
            </View>
            <ScrollView style={styles.body} showsVerticalScrollIndicator={false}>
                <Text style={styles.sectionTitle}>Introduction</Text>
                <LockerCard
                    text={'Welcome to Hublocker, your gateway to hassle-free parcel management. Our locker services redefine convenience, providing a seamless experience for sending, receiving, and picking up your packages.'}
                />
                <TouchableOpacity onPress={()=>navigation.navigate('BottomTabs')}>
                <Text style={styles.sectionTitle}>Key Benefits</Text>

                </TouchableOpacity>
                <LockerCard
                    list={true}
                    steps={[
                        { title: 'Secure and Convenient:', text: 'Our lockers prioritize the safety of your parcels.', image: icons.checkmark },
                        { title: 'Accessibility:', text: 'Access your package at any time to fit your schedule.', image: icons.checkmark },
                        { title: '24/7 Contactless Transactions:', text: 'Embrace contactless transactions for a safer experience.', image: icons.checkmark },
                        { title: 'Vacation:', text: "Schedule periods of when you won't be available to pick your packages.", image: icons.checkmark },
                        { title: 'Family-friendly Convenience:', text: 'Our locker prioritize the safety of your parcels.', image: icons.checkmark },
                        { title: 'Bully or inflammatory remarks:', text: 'Bully or make inflammatory remarks to other community members.', image: icons.checkmark },
                        { title: 'Family-friendly Convenience:', text: 'Our locker prioritize the safety of your parcels.', image: icons.checkmark },
                        { title: 'Bully or inflammatory remarks:', text: 'Bully or make inflammatory remarks to other community members.', image: icons.checkmark },
                    
                    ]}
                />
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.white,
    },
    header: {
        width: '100%',
        height: SCREEN_HEIGHT * 0.22,
    },
    button1: {
        position: 'absolute',
        marginTop: SIZES.padding,
        marginLeft: SIZES.base * 3,
        height: 36,
        width: 36,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: COLORS.light,
        borderRadius: 100,
        opacity: 0.6,
        shadowColor: COLORS.black,
        shadowOffset: {
            width: 2,
            height: 5,
        },
        shadowOpacity: 0.5,
        shadowRadius: 4,
        elevation: 10,
    },
    body: {
        marginHorizontal: SIZES.base * 2.1,
        marginTop: scale(20),
    },
    sectionTitle: {
        ...FONTS.h3b,
        color: COLORS.black,
        textAlign: 'left',
        // marginTop: SIZES.base * 2,
        // marginBottom: SIZES.base,
    },
});

export default Notification;
