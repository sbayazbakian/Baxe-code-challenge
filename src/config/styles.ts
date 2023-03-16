import {Dimensions, PixelRatio, StyleSheet} from 'react-native';

const {width, height} = Dimensions.get('window');

const normalize = (size: number) => size / PixelRatio.getFontScale();

const metrics = {
  avatarRadius: {
    small: 32,
    medium: 40,
    large: 52,
  },
  borderRadius: {
    small: 10,
    medium: 15,
    large: 20,
    xl: 40,
  },
  buttonRadius: 4,
  icons: {
    tiny: 15,
    small: 20,
    medium: 30,
    large: 45,
    xl: 50,
  },
  screenWidth: width < height ? width : height,
  screenHeight: width < height ? height : width,
};

const spacing = {
  tiny: 5,
  small: 10,
  medium: 15,
  large: 20,
  huge: 60,
};

const palette = {
  black: '#000000',
  gray: '#DEE0E2', // For main header
  grayAlt: '#91969F', // used mainly in fonts
  grayAlt2: '#F4F4F5', // used mainly for blocks
  orangeGradient: ['#FF3B61', '#FF9921'],
  silverGradient: ['#C4CEE0', '#FAFBFF'],
  silver: '#B7BDCD',
  whiteGradient: [ '#FFFFFF', '#EBEBEB'],
};

const typography = {
  primary: 'Santral',
  secondary: 'Dank-Mono',
};

const colors = {
  bgColor: (isDarkMode: boolean): {backgroundColor: string} => ({
    backgroundColor: isDarkMode ? colors.darker : colors.lighter,
  }),
  headerBackground: palette.midnightblue,
  tabBarIcon: palette.lightslategray,
  tabBarIconFocused: palette.white,
  titleColor: palette.white,
  text: palette.lightslategray,
  title: palette.black,
  subtitle: palette.grayAlt,
};

const commonStyles = StyleSheet.create({
  tabBar: {
    backgroundColor: colors.background,
    shadowColor: palette.black,
    shadowOffset: {width: 0, height: -1},
    // shadowOpacity: 0.5,
  },
  tabBarLabel: {
    // fontFamily: typography.primary,
    fontSize: 10,
  },
  container: {
    // flex: 1,
    backgroundColor: colors.background,
  },
  title: {
    color: colors.titleColor,
    fontSize: normalize(36),
    fontWeight: '700',
    fontFamily: typography.primary,
  },
  titleSmall: {
    color: colors.titleColor,
    fontSize: normalize(18),
    fontWeight: '700',
    fontFamily: typography.primary,
    paddingBottom: spacing.small,
  },
  textMedium: {
    fontFamily: typography.primary,
    color: colors.text,
    fontSize: normalize(16),
    lineHeight: 19.1,
  },
  textSmall: {
    fontFamily: typography.primary,
    fontWeight: '400',
    color: colors.text,
    fontSize: normalize(14),
    lineHeight: 16.37,
  },
  header: {
    color: colors.text,
    fontSize: 30,
  },
});

export {commonStyles, colors, metrics, normalize, spacing, palette, typography};
