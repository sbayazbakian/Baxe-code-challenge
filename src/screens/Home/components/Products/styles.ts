import {StyleSheet} from 'react-native';
import {radius, palette, spacing, typography} from 'src/config/styles';

const styles = StyleSheet.create({
  abs: {
    position: 'absolute',
    top: 0,
    left: 0,
  },
  bottomContainer: {
    backgroundColor: 'rgba(255, 255, 255, 0.7)',
    bottom: 0,
    left: 0,
    width: 169,
    height: 44,
    position: 'absolute',
    zIndex: 1,
  },
  bottomContainerAlign: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  bottomContainerAlignAlt: {
    alignItems: 'flex-start',
    justifyContent: 'center',
    paddingLeft: spacing.medium,
  },
  bottomContainerTitle: {
    color: palette.pink,
    fontFamily: typography.secondary,
    fontSize: 28,
  },
  bottomContainerTitleAlt: {
    color: palette.pink,
    fontFamily: typography.primary,
    fontSize: 12,
    lineHeight: 16,
  },
  container: {
    flex: 1,
    flexDirection: 'row',
  },
  icon: {
    resizeMode: 'contain',
    marginBottom: spacing.large,
    zIndex: 1,
  },
  panel: {
    borderRadius: radius.borders.medium,
    width: 169,
    height: 187,
    marginRight: spacing.medium,
    paddingHorizontal: 25,
    paddingVertical: 25,
  },
  lead: {
    color: '#F4F4F5',
    fontFamily: typography.primary,
    fontSize: 12,
    lineHeight: 16,
    zIndex: 1,
  },
  title: {
    color: '#F4F4F5',
    fontFamily: typography.primary,
    fontSize: 19,
    lineHeight: 24,
    marginTop: spacing.small,
    zIndex: 1,
  },
  bullet: {
    color: '#F4F4F5',
    fontFamily: typography.secondary,
    fontSize: 12,
    lineHeight: 16,
    zIndex: 1,
  },
});

export default styles;
