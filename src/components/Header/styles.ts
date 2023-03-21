import {StyleSheet} from 'react-native';
import {palette, spacing, radius} from '../../config/styles';

const styles = StyleSheet.create({
  avatar: {
    height: radius.avatar.small,
    width: radius.avatar.small,
    borderRadius: radius.avatar.small,
  },
  container: {
    flexDirection: 'row',
    backgroundColor: palette.gray,
    height: 44,
    paddingHorizontal: spacing.large,
  },
  left: {
    flex: 1,
    alignItems: 'flex-start',
    justifyContent: 'center',
  },
  right: {
    flex: 1,
    alignItems: 'flex-end',
    justifyContent: 'center',
  },
});

export default styles;
