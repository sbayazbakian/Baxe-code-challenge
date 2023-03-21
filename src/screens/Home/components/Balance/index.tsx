import React from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import GradientText from './components/GradientText';

import {palette} from 'src/config/styles';
import styles from './styles';
import {IProps} from './types';

const BAXE_LOGO = require('./img/baxe_logo.png');
const DEPOSIT_ICON = require('./img/deposit_icon.png');
const MORE_ICON = require('./img/more_icon.png');
const QR_ICON = require('./img/qr_icon.png');
const TRANSFER_ICON = require('./img/transfer_icon.png');

const Balance = ({amounts: {baxe_cash, euro}}: IProps): JSX.Element => (
  <LinearGradient
    start={{x: 0, y: 1}}
    end={{x: 0, y: 0}}
    colors={palette.silverGradient}
    style={styles.container}>
    <Image source={QR_ICON} style={styles.topItem} />
    <GradientText style={styles.subtitle}>Balance</GradientText>
    <View style={styles.titleContainer}>
      <Image source={BAXE_LOGO} style={styles.logo} />
      <GradientText style={styles.title}>{baxe_cash}</GradientText>
    </View>
    <Text style={styles.subtitleAlt}>{`€ ${euro}`}</Text>
    <View style={styles.bottomContainer}>
      <TouchableOpacity style={styles.bottomItem}>
        <Image source={DEPOSIT_ICON} style={styles.icon} />
        <Text style={styles.bottomItemText}>Deposit</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.bottomItem}>
        <Image source={TRANSFER_ICON} style={styles.icon} />
        <Text style={styles.bottomItemText}>Transfer</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.bottomItemRight}>
        <Image source={MORE_ICON} style={styles.iconMore} />
      </TouchableOpacity>
    </View>
  </LinearGradient>
);

export default Balance;
