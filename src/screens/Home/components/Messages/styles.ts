import {StyleSheet} from 'react-native';
import {palette, radius, spacing, typography} from 'src/config/styles';

const styles = StyleSheet.create({
  bottomContainer: {
    flex: 1,
    flexDirection: 'row',
    height: 56,
    borderBottomRightRadius: radius.borders.large,
    borderBottomLeftRadius: radius.borders.large,
    padding: spacing.large,
  },
  bottomText: {
    color: palette.white,
    flex: 1,
    fontFamily: typography.tertiary,
    fontSize: 14,
    lineHeight: 16,
  },
  buttonsContainer: {
    flexDirection: 'row',
  },
  buttonText: {
    fontFamily: typography.primary,
    fontSize: 14,
    lineHeight: 18,
  },
  buttonTextDisabled: {
    color: 'rgba(145, 150, 159, 1)',
  },
  buttonTextContainer: {
    alignItems: 'center',
    backgroundColor: 'rgba(238, 239, 240, 1)',
    flex: 1,
    paddingVertical: spacing.large,
  },
  buttonTextContainerLeft: {
    borderTopLeftRadius: radius.borders.large,
  },
  buttonTextContainerRight: {
    borderTopRightRadius: radius.borders.large,
  },
  buttonTextContainerSelected: {
    backgroundColor: palette.white,
    color: palette.black,
  },
  container: {
    backgroundColor: palette.white,
    borderRadius: radius.borders.large,
    flex: 1,
    marginBottom: spacing.large,
    marginTop: spacing.small,
  },
  from: {
    fontFamily: typography.primary,
    fontSize: 14,
    lineHeight: 20,
  },
  hr: {
    marginRight: spacing.large,
    marginTop: 13,
    color: 'rgba(145, 150, 159, 1)',
    fontFamily: typography.secondary,
    fontSize: 12,
    lineHeight: 18,
  },
  message: {
    color: 'rgba(145, 150, 159, 1)',
    fontFamily: typography.secondary,
    fontSize: 12,
    lineHeight: 18,
  },
  messageAvatar: {
    width: 40,
    height: 40,
    borderRadius: 40,
    marginLeft: spacing.large,
    marginVertical: spacing.medium,
  },
  messageBody: {
    flexDirection: 'column',
    flex: 1,
    marginLeft: spacing.large,
    marginVertical: spacing.medium,
  },
  messageContainer: {
    borderBottomColor: '#EEEFF0',
    borderBottomWidth: 1,
    flex: 1,
    flexDirection: 'row',
  },
});

export default styles;
