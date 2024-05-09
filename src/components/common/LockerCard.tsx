import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { COLORS, FONTS, SIZES } from '../../constants';

interface ModalPopUpProps {
  text?: string;
  list?: boolean;
  steps?: Array<{ text: string; image?: any, title: string }>;
}

const LockerCard: React.FC<ModalPopUpProps> = ({
  text,
  list,
  steps,
}: ModalPopUpProps) => {
  return (
    <View style={[styles.container, styles.shadow]}>
      {list &&
        steps &&
        steps.map((step, index) => (
          <View style={styles.header} key={index}>
            {step.image && (
              <Image
                source={step.image}
                style={{ height: 8, width: 8, marginRight: 7, marginTop: 7}}
                resizeMode="contain"
              />
            )}
          
            <Text style={styles.text}> <Text style={styles.text2}>{step.title}</Text>{step.text}</Text>
          </View>
        ))}

      {!list && (
        <View style={styles.header}>
          <Text style={styles.text}>{text}</Text>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    flex: 1,
    // backgroundColor: COLORS.lightWhite,
    justifyContent: 'center',
    alignItems: 'flex-start',
    borderRadius: 4,
    paddingVertical: SIZES.padding,
    // paddingHorizontal: SIZES.base,/
  
  },
  text: {
    ...FONTS.h4a,
    fontSize: 16,
    color: 'black',
    textAlign: 'justify'
  },

  text2: {
    ...FONTS.h4b,
    fontSize: 16,
    color: 'black',
    textAlign: 'justify',
    
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start'
    
  },
  shadow: {
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
  },
});

export default LockerCard;
