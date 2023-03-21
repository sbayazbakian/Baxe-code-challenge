import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {StatusBar, StatusBarProps, View} from 'react-native';
import styles from './styles';
import {IProps} from './types';

const StatBar = ({
  backgroundColor,
  ...props
}: IProps & StatusBarProps): JSX.Element => (
  <View style={[styles.container, {backgroundColor}]}>
    <SafeAreaView>
      <StatusBar translucent backgroundColor={backgroundColor} {...props} />
    </SafeAreaView>
  </View>
);

export default StatBar;
