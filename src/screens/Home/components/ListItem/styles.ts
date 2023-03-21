import {StyleSheet} from 'react-native';

import {
  normalize,
  palette,
  radius,
  spacing,
  typography,
} from 'src/config/styles';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    width: 218,
    height: 97,
    backgroundColor: '#F4F4F5',
    borderRadius: radius.borders.medium,
    marginRight: spacing.medium,
  },
  containerLeft: {
    paddingLeft: spacing.large,
    paddingTop: spacing.large,
  },
  containerRight: {
    flex: 1,
    paddingLeft: spacing.small,
    paddingTop: spacing.large,
  },
  subtitle: {
    color: palette.grayAlt,
    fontSize: normalize(10),
    fontWeight: '500',
    fontFamily: typography.primary,
    lineHeight: 16,
    marginTop: spacing.small,
  },
  title: {
    color: palette.black,
    fontSize: normalize(12),
    fontWeight: '700',
    fontFamily: typography.primary,
    lineHeight: 18,
  },
  icon: {
    flex: 1,
    resizeMode: 'contain',
    width: 18,
    height: 18,
  },
  iconContainer: {
    width: 40,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: radius.borders.small,
  },
});

export default styles;
