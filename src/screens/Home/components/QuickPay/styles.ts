import {StyleSheet} from 'react-native';
import {palette, radius, spacing, typography} from 'src/config/styles';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: palette.white,
    borderRadius: radius.borders.medium,
    width: 352,
    height: 140,
    marginTop: spacing.small,
    padding: spacing.medium,
  },
  title: {
    fontFamily: typography.primary,
    fontSize: 16,
    lineHeight: 18,
  },
});

export default styles;
