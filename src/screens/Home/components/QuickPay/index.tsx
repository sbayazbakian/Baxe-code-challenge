import React from 'react';
import {FlatList, Text, View} from 'react-native';

import ListItem from './components/ListItem';
import styles from './styles';
import {IProps} from './types';

const QuickPay = ({contacts}: IProps): JSX.Element => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Quick Pay</Text>
      <FlatList data={contacts} horizontal renderItem={ListItem} />
    </View>
  );
};

export default QuickPay;
