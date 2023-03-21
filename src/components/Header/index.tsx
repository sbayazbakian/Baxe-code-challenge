import React from 'react';
import {TouchableOpacity, View, Image} from 'react-native';

import {avatarUrl} from 'src/config/constants';
import styles from './styles';

const imgUrl = avatarUrl(1);
const icon = require('./img/header_icon.png');

const Header = (): JSX.Element => (
  <View style={styles.container}>
    <TouchableOpacity style={styles.left}>
      <Image source={{uri: imgUrl}} style={styles.avatar} />
    </TouchableOpacity>
    <TouchableOpacity style={styles.right}>
      <Image source={icon} />
    </TouchableOpacity>
  </View>
);

export default Header;
