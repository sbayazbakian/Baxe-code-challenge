import React from 'react';
import {
  Image,
  ImageBackground,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import {palette} from 'src/config/styles';
import styles from './styles';

const BARS_ICON = require('./img/icon_bars.png');
const BMC_IMG = require('./img/bmc.png');
const SAVINGS_ACCOUNT_IMG = require('./img/savings_account.png');
const WALLET_ICON = require('./img/icon_wallet.png');

const Products = (): JSX.Element => (
  <View style={styles.container}>
    <LinearGradient
      useAngle={true}
      angle={130}
      angleCenter={{x: 0.5, y: 0.5}}
      start={{x: 0, y: 0}}
      end={{x: 1, y: 1}}
      colors={palette.tealGradient}
      style={styles.panel}>
      <Image source={WALLET_ICON} style={styles.icon} />
      <Text style={styles.lead}>Savings Account</Text>
      <Text style={styles.title}>Earn Interst</Text>
      <Text style={styles.bullet}>With Your BSC</Text>
      <TouchableOpacity
        style={[styles.bottomContainer, styles.bottomContainerAlign]}>
        <Text style={styles.bottomContainerTitle}>+</Text>
      </TouchableOpacity>
      <ImageBackground
        source={SAVINGS_ACCOUNT_IMG}
        resizeMode="contain"
        style={[styles.panel, styles.abs]}
      />
    </LinearGradient>
    <LinearGradient
      useAngle={true}
      angle={130}
      angleCenter={{x: 0.5, y: 0.5}}
      start={{x: 0, y: 0}}
      end={{x: 1, y: 1}}
      colors={palette.orangeGradient}
      style={styles.panel}>
      <Image source={BARS_ICON} style={styles.icon} />
      <Text style={styles.lead}>BMC</Text>
      <Text style={styles.title}>1200.00</Text>
      <Text style={styles.bullet}>€ 1,108.00</Text>
      <TouchableOpacity
        style={[styles.bottomContainer, styles.bottomContainerAlignAlt]}>
        <Text style={styles.bottomContainerTitleAlt}>+ € 298.00</Text>
      </TouchableOpacity>
      <ImageBackground
        source={BMC_IMG}
        resizeMode="contain"
        style={[styles.panel, styles.abs]}
      />
    </LinearGradient>
  </View>
);

export default Products;
