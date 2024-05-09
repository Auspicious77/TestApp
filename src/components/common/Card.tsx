import React from 'react';
import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import {useNavigation, NavigationProp} from '@react-navigation/native';
import {RootStackParamList} from '../../types';
import { COLORS, SIZES, FONTS, icons } from '../../constants';
import { SCREEN_HEIGHT } from '../../constants/theme';
import { scale } from '../../utils/shared';

type CardProps = {
  title: string;
  handleOnPress: () => void,
  count: string;
  pending: boolean
};

const Card: React.FC<CardProps> = ({title, handleOnPress, count, pending}) => {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();


  return (
    <TouchableOpacity   onPress={handleOnPress} style={styles.container}>
      <View
        style={{...styles.backText, backgroundColor: pending? '#ffebea' : '#e7f0ea'}}>
        <Image source={pending? icons?.pending : icons.delivered} style={{...styles.icon, tintColor: pending? COLORS.red: COLORS.primary}}/>
      </View>
      <View>
        <Text style={styles.headerText}>{title}</Text>
        <Text style={styles.headerText}>{count}</Text>

      </View>


      <View
      style={{marginHorizontal: SIZES.h2}}>
        <Image source={icons.ashright} style={styles.icon2}/>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
    container: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      backgroundColor: COLORS.white,
      borderRadius: 5,
      paddingVertical: scale(10),
      paddingHorizontal: scale(5),
      // elevation: 0.2
   
    },
    headerText: {
      ...FONTS.h4,
      color: COLORS.primary,
      marginLeft: scale(25),
      marginRight: scale(50)
    },
    icon: {
        resizeMode: 'contain', 
        height: scale(23), 
        width: scale(23),
        tintColor: COLORS.black
    },
    icon2: {
      resizeMode: 'contain', 
      height: scale(11), 
      width: scale(11),
      tintColor: COLORS.black
  },
    backText: {
         height: scale(40),
         width: scale(40),
         borderRadius: 100, 
        alignItems: 'center',
        marginHorizontal: SIZES.h5,
        justifyContent: 'center',
    }
  });


export default Card;
