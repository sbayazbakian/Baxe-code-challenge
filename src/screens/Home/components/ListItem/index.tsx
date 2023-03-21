import React from 'react';
import {Image, ListRenderItemInfo, View, Text} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import {palette} from 'src/config/styles';
import styles from './styles';
import {IProps} from './types';

const Item = ({
  item: {title, subtitle, icon},
  index,
}: ListRenderItemInfo<IProps>) => (
  <View key={index} style={styles.container}>
    <View style={styles.containerLeft}>
      <LinearGradient
        useAngle={true}
        angle={130}
        angleCenter={{x: 0.5, y: 0.5}}
        start={{x: 0, y: 0}}
        end={{x: 1, y: 1}}
        colors={palette.violetGradient}
        style={styles.iconContainer}>
        <Image source={icon} style={styles.icon} />
      </LinearGradient>
    </View>
    <View style={styles.containerRight}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.subtitle}>{subtitle}</Text>
    </View>
  </View>
);

export default Item;
