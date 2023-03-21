import {StyleSheet} from 'react-native';
import {radius, typography, spacing} from 'src/config/styles';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderTopRightRadius: radius.borders.medium,
    borderTopLeftRadius: radius.borders.medium,
    marginTop: 5,
  },
  inner: {
    padding: spacing.large,
  },
  list: {
    marginVertical: spacing.medium,
  },
  subtitle: {
    fontFamily: typography.secondary,
    fontSize: 12,
  },
  title: {
    fontFamily: typography.tertiary,
    fontSize: 24,
  },
  sectionTitle: {
    fontFamily: typography.primary,
    fontSize: 16,
    lineHeight: 18,
    marginTop: spacing.large,
    marginBottom: spacing.small,
  },
});

export default styles;
