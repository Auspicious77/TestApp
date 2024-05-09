import { Dimensions } from 'react-native';
import { scale } from '../utils/shared';


const { width, height } = Dimensions.get('window');

export const SCREEN_WIDTH: number = Dimensions.get('window').width;
export const SCREEN_HEIGHT: number = Dimensions.get('window').height;

export const COLORS = {
  black: '#000000',
  white: '#ffffff',
  lightWhite: '#fcfcfc',
  light: '#FCFFF7',
  gray: '#EFF2F7',
  gray1a: '#f9f9f9',
  gray1: '#65719029',
  gray2: '#B8CADE45',
  gray3: '#00000029',
  gray4: '#B4B5B5',
  gray5: '#00000073',
  gray6: '#00000085',
  gray7: '#707070',
  primary: '#043c18',
  secondary: '#000601',
  background: '#FCFFF7',
  deepBlue: '#001F55',
  red: '#FF3D00',
  green: '#4CAF50',
  blue: '#039BE5',
  orange: '#FAC621',
  boxblue: '#424F95',
  grey: '#161615',
  chocolate: '#200A4D99',
  neutral: '#323F4B',
  backGround: '#FAFAFA'
};

export const SIZES = {
  base: height * 0.01,
  font: height * 0.0175,
  radius: 5,
  padding: height * 0.03,
  navTitle: height * 0.04375,
  h1: height * 0.0375,
  h2: height * 0.0275,
  h2a: height * 0.034,
  h2c: height * 0.0245,
  h3: height * 0.0225,
  h3a: height * 0.0220,
  h3c: height * 0.020,
  h4: height * 0.0175,
  h5: height * 0.015,
  h5b: height * 0.013,
  h56a: scale(5),
//   body1: height * 0.0375,
//   body2: height * 0.025,
//   body3: height * 0.02,
//   body4: height * 0.0175,
//   body5: height * 0.015,
//   intro: height * 0.04,
  width,
  height,
};

export const FONTS = {
  navTitle: { fontFamily: 'Raleway-Heavy', fontSize: SIZES.navTitle },
  largeTitleBold: {
    fontFamily: 'Raleway-Heavy',
    fontSize: SIZES.h1 * 1.5,
    lineHeight: height * 0.05,
  },
  largeTitleBoldMont: {
    fontFamily: 'Rakey-Heavy',
    fontSize: SIZES.h1 * 1.5,
    lineHeight: height * 0.05,
  },
  h1: {
    fontFamily: 'Raleway-Bold',
    fontSize: SIZES.h1,
    lineHeight: height * 0.04,
  },
  h1b: {
    fontFamily: 'Raleway-Bold',
    fontSize: SIZES.h1*1.2,
    lineHeight: height * 0.047,
  },
  h1a: {
    fontFamily: 'Raleway-Bold',
    fontSize: SIZES.h1*0.8,
    lineHeight: height * 0.04,
    // fontWeight: '700'
  },

  h2: {
    fontFamily: 'Raleway-Bold',
    fontSize: SIZES.h2,
    lineHeight: height * 0.05,
  },
  h2a: {
    fontFamily: 'Raleway-Medium',
    fontSize: SIZES.h2,
    lineHeight: height * 0.05,
  },
  h2b: {
    fontFamily: 'Raleway-Bold',
    fontSize: SIZES.h3,
    lineHeight: height * 0.03,
  },
  h2c: {
    fontFamily: 'Raleway-Medium',
    fontSize: SIZES.h2-5,
    lineHeight: height * 0.026,
  },
  h3: {
    fontFamily: 'Raleway-Medium',
    fontSize: SIZES.h3,
    lineHeight: height * 0.03,
  },

  h3a: {
    fontFamily: 'Raleway-Regular',
    fontSize: SIZES.h3a,
    lineHeight: height * 0.03,
  },

  h3c: {
    fontFamily: 'Raleway-Regular',
    fontSize: SIZES.h3c,
    lineHeight: height * 0.03,
  },

  h3b: {
    fontFamily: 'Raleway-Bold',
    fontSize: SIZES.h3a,
    lineHeight: height * 0.03,
  },

  h4: {
    fontFamily: 'Raleway-Medium',
    fontSize: SIZES.h4,
    lineHeight: height * 0.024,
  },

  h4a: {
    fontFamily: 'Raleway-Regular',
    fontSize: SIZES.h4*1.09,
    lineHeight: height * 0.024,
  },
  h4c: {
    fontFamily: 'Raleway-Regular',
    fontSize: SIZES.h4,
    lineHeight: height * 0.021,
   
  },

  h4d: {
    fontFamily: 'Raleway-Regular',
    fontSize: SIZES.h4*0.9,
    lineHeight: height * 0.024,
  },

  h4b: {
    fontFamily: 'Raleway-Bold',
    fontSize: SIZES.h4*1.09,
    lineHeight: height * 0.028,
  },

  h5: {
    fontFamily: 'Raleway-Regular',
    fontSize: SIZES.h5*1.09,
    lineHeight: height * 0.024,
  },

  h5a: {
    fontFamily: 'Raleway-Medium',
    fontSize: SIZES.h5,
    lineHeight: height * 0.03,
  },
  h5b: {
    fontFamily: 'Raleway-Regular',
    fontSize: scale(10),
    lineHeight: height * 0.0127,
  },

  h5d: {
    fontFamily: 'Raleway-Regular',
    fontSize: scale(10),
    lineHeight: height * 0.0127,
  },

  h6a: {
    fontFamily: 'Raleway-Medium',
    fontSize: scale(8),
    lineHeight: scale(8),
  },
  
  // ... (other font styles)
};

const appTheme = { COLORS, SIZES, FONTS, SCREEN_HEIGHT, SCREEN_WIDTH };

export default appTheme;
