import React from 'react';
import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import {useNavigation, NavigationProp} from '@react-navigation/native';
import {RootStackParamList} from '../../types';
import { COLORS, SIZES, FONTS, icons } from '../../constants';
import { SCREEN_HEIGHT } from '../../constants/theme';
import { scale } from '../../utils/shared';

type HeaderProps = {
  title: string;
  handleFilter: () => void
};

const Header: React.FC<HeaderProps> = ({title, handleFilter}) => {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();


  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.backText}>
        <Text></Text>
      </TouchableOpacity>
      <View>
        <Text style={styles.headerText}>{title}</Text>
      </View>
      <TouchableOpacity 
      onPress={handleFilter}
      style={{marginHorizontal: SIZES.h2}}>
        <Image source={icons.bx_filter} style={styles.icon}/>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      backgroundColor: COLORS.primary,
      height: SCREEN_HEIGHT*0.09
    },
    headerText: {
      ...FONTS.h3,
      color: COLORS.white,
      marginLeft: scale(25)
    },
    icon: {
        resizeMode: 'contain', 
        height: scale(30), 
        width: scale(30),
        tintColor: COLORS.white
    },
    backText: {
        flexDirection: 'row',
        alignItems: 'center',
        marginHorizontal: SIZES.h5,
        justifyContent: 'center',
    }
  });


export default Header;
