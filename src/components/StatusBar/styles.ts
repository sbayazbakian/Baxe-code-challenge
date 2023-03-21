import {StatusBar, StyleSheet} from 'react-native';
import {isIOS} from '../../config/constants';

// iPhone 14 Pro models have a status bar height of 54pt.
const STATUSBAR_HEIGHT = isIOS ? 54 : StatusBar.currentHeight;

const styles = StyleSheet.create({
  container: {
    height: STATUSBAR_HEIGHT,
  },
});

export default styles;
