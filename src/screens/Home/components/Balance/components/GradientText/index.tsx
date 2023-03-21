/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Text, TextStyle} from 'react-native';
import MaskedView from '@react-native-community/masked-view';
import LinearGradient from 'react-native-linear-gradient';

import {palette} from 'src/config/styles';

type Props = {
  style: TextStyle;
  [x: string]: any;
};

const GradientText = (props: Props): JSX.Element => {
  const {style} = props;
  return (
    <MaskedView maskElement={<Text {...props} />}>
      <LinearGradient
        useAngle={true}
        angle={90}
        angleCenter={{x: 0.5, y: 0.5}}
        colors={palette.silverGradientAlt}
        start={{x: 0, y: 0}}
        end={{x: 1, y: 0}}>
        <Text {...props} style={[style, {opacity: 0}]} />
      </LinearGradient>
    </MaskedView>
  );
};

export default GradientText;
