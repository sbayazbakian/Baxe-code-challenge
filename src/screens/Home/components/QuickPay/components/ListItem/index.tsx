import React from 'react';
import {Alert, Image, ListRenderItemInfo, Text, View} from 'react-native';

import {avatarUrl} from 'src/config/constants';
import {IContact} from 'src/config/types';
import Avatar from 'src/screens/Home/components/Avatar';
import styles from './styles';

const ICON_BOTTOM = require('./img/icon_arrows.png');

const ListItem = ({item}: ListRenderItemInfo<IContact>): JSX.Element => {
  const uri = avatarUrl(item.id);
  const onPressAction = () => {
    Alert.alert(`Pay ${item.firstname} ${item.lastname}?`);
  };

  return (
    <View key={item.id} style={styles.container}>
      <View style={styles.avatarContainer}>
        <View style={styles.iconBottomContainer}>
          <Image source={ICON_BOTTOM} style={styles.icon} />
        </View>
        <Avatar onPressAction={onPressAction} uri={uri} />
      </View>
      <Text ellipsizeMode="clip" style={styles.title}>
        {item.firstname}
      </Text>
    </View>
  );
};

export default ListItem;
