import {StyleSheet} from 'react-native';
import {palette, spacing, typography} from 'src/config/styles';

const styles = StyleSheet.create({
  avatarContainer: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4.65,
    elevation: 8,
  },
  container: {
    marginVertical: spacing.medium,
    marginRight: spacing.medium,
    height: 77,
    width: 66,
    flexDirection: 'column',
    alignItems: 'center',
  },
  icon: {
    flex: 1,
    resizeMode: 'contain',
    width: 8,
    height: 8,
  },
  iconTopContainer: {},
  iconBottomContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: palette.pink,
    borderRadius: 18,
    borderWidth: 2,
    borderColor: palette.white,
    width: 18,
    height: 18,
    bottom: 0,
    right: 0,
    position: 'absolute',
    zIndex: 2,
  },
  title: {
    marginTop: 8,
    fontFamily: typography.primary,
    fontSize: 12,
    lineHeight: 18,
    textAlign: 'center',
  },
});

export default styles;
