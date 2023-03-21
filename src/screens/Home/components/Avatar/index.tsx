import React from 'react';
import {Image, TouchableOpacity} from 'react-native';

import styles from './styles';
import {IProps} from './types';

const Avatar = ({uri, onPressAction}: IProps): JSX.Element => (
  <TouchableOpacity onPress={onPressAction}>
    <Image source={{uri}} style={styles.avatar} />
  </TouchableOpacity>
);

export default Avatar;
