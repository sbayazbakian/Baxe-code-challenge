import {Dimensions, PixelRatio} from 'react-native';

const {width, height} = Dimensions.get('window');

const normalize = (size: number) => size / PixelRatio.getFontScale();

const metrics = {
  screenWidth: width < height ? width : height,
  screenHeight: width < height ? height : width,
};

const spacing = {
  tiny: 5,
  small: 10,
  medium: 15,
  large: 20,
  xl: 60,
};

const sizes = {
  icons: {
    tiny: 15,
    small: 20,
    medium: 30,
    large: 45,
    xl: 50,
  },
};

const radius = {
  avatar: {
    small: 32,
    medium: 40,
    large: 52,
  },
  borders: {
    small: 10,
    medium: 15,
    large: 20,
    xl: 40,
  },
};

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const getThemePalette = (isDarkMode: boolean) =>
  isDarkMode ? darkPalette : lightPalette;

const lightPalette = {
  black: '#000000',
  gray: '#DEE0E2',
  grayAlt: '#91969F',
  grayAlt2: '#F4F4F5',
  orangeGradient: ['#FF3B61', '#FF9921'],
  pink: 'rgba(255, 59, 97, 1)',
  silverGradient: ['#C4CEE0', '#FAFBFF'],
  silverGradientAlt: ['#D7D0E6', '#A2B3CA'],
  silver: '#B7BDCD',
  tealGradient: ['#520D8C', '#31C9B1'],
  violetGradient: ['#FF3B61', '#520D8C'],
  white: '#fff',
  whiteGradient: ['#FFFFFF', '#EBEBEB'],
};

const darkPalette = {};

const palette = lightPalette;

const typography = {
  primary: 'Santral-Bold',
  secondary: 'Santral-Light',
  tertiary: 'FONTSPRING DEMO - Torus Pro SemiBold',
};

export {metrics, normalize, sizes, spacing, palette, radius, typography};
