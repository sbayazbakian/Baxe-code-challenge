import {StyleSheet} from 'react-native';
import {radius, spacing, typography} from 'src/config/styles';

const styles = StyleSheet.create({
  bottomContainer: {
    alignItems: 'center',
    borderWidth: 2,
    borderColor: 'rgba(183, 189, 205, 1)',
    flexDirection: 'row',
    backgroundColor: 'rgba(183, 189, 205, 1)',
    bottom: 0,
    left: 0,
    right: 0,
    width: 352,
    height: 60,
    position: 'absolute',
    zIndex: 1,
  },
  bottomItem: {
    marginLeft: 17,
    marginRight: 28,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  bottomItemRight: {
    position: 'absolute',
    right: 17,
  },
  bottomItemText: {
    fontFamily: typography.primary,
    color: 'white',
    marginLeft: spacing.medium,
  },
  container: {
    height: 221,
    width: 352,
    borderColor: 'rgba(216, 216, 216, 0.7)',
    borderWidth: 2,
    borderRadius: radius.borders.medium,
    paddingTop: 38,
    paddingLeft: 29,
  },
  icon: {
    width: 15,
    height: 15,
    resizeMode: 'contain',
  },
  iconMore: {
    width: 25,
    height: 25,
    resizeMode: 'contain',
  },
  logo: {
    width: 25,
    height: 31,
    marginTop: spacing.tiny,
  },
  subtitle: {
    fontSize: 16,
    fontFamily: typography.primary,
    fontWeight: '700',
  },
  subtitleAlt: {
    color: 'rgba(162, 179, 202, 1)',
    fontSize: 14,
    fontFamily: typography.secondary,
    fontWeight: '700',
    marginTop: spacing.medium,
  },
  title: {
    // shadowColor: 'rgba(255, 255, 255, 1)',
    // shadowOffset: {
    //   width: -1,
    //   height: -1,
    // },
    // shadowRadius: 1,
    // shadowOpacity: 1,
    fontSize: 40,
    fontFamily: typography.primary,
    fontWeight: '700',
    marginTop: spacing.medium,
    marginLeft: spacing.tiny,
  },
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  topItem: {
    position: 'absolute',
    top: 16,
    right: 17,
  },
});

export default styles;
