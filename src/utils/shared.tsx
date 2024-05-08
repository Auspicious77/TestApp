
import { Dimensions, Image, Platform, Text, View } from 'react-native';


const { width, height } = Dimensions.get('window');
const guidelineWidth = Platform.isPad ? 560 : 360;

export const scale = (size: number): number => {
  return (width / guidelineWidth) * size;
};




export function Capitalize(string: string) {
    // Check if the input is valid and a string
    if(typeof string !== 'string' || string.length === 0) {
      return ''; // Return an empty string for invalid input
    }
}



  export const formattedAmountWithNaira = (amount, dp = 2) => {
    return amount
      ? "\u20A6" +
      parseFloat(amount).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,')
      : "₦0.00";
  }