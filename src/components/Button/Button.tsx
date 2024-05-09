import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Platform, ActivityIndicator } from 'react-native';
import { COLORS, FONTS, SIZES,} from '../../constants';
import { scale } from '../../utils/shared';



interface ButtonProps {
  text?: string
  onPress?: any,
  isLoading?: boolean
 
}
const Button: React.FC<ButtonProps> = ({ text, onPress, isLoading}) => {
    return (
        <TouchableOpacity
            disabled={isLoading? true : false}
            style={{...styles.container, opacity: isLoading? 0.6 : 1}}
            onPress={onPress}>
            {
              isLoading? <ActivityIndicator color={COLORS.white} size={23}/> :
              <Text style={styles.text}>{text}</Text>
            }
            
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    container: {
        height: scale(48),
        width: '100%',
        backgroundColor: COLORS.primary,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 7,
  
      
      },
      text: {
        ...FONTS.h4,
        color: 'white',
      },
   
});

export default Button;
