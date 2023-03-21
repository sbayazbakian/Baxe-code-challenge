import React, {PropsWithChildren} from 'react';
import {ScrollView, View} from 'react-native';
import Header from 'src/components/Header';
import StatusBar from 'src/components/StatusBar';
import styles from './styles';
import {palette} from 'src/config/styles';

type ScreenProps = PropsWithChildren<{}>;

const Screen = ({children}: ScreenProps) => (
  <View style={styles.container}>
    <StatusBar backgroundColor={palette.gray} barStyle="dark-content" />
    <Header />
    <ScrollView style={styles.content}>{children}</ScrollView>
  </View>
);

export default Screen;
