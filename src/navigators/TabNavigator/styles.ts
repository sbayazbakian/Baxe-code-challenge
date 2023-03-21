import {StyleSheet} from 'react-native';

import {typography} from 'src/config/styles';

const styles = StyleSheet.create({
  label: {
    fontFamily: typography.secondary,
    fontSize: 9,
    lineHeight: 11,
    textAlign: 'center',
  },
  selected: {
    color: '#520D8C',
  },
});

export default styles;
