import React, {useState} from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {palette} from 'src/config/styles';

import styles from './styles';
import {IProps} from './types';

type Buttons = 'messages' | 'posts';

const ICON_ARROW = require('./img/icon_arrow.png');

const Messages = ({messages}: IProps): JSX.Element => {
  const [selected, setSelected] = useState<Buttons>('messages');
  const isMessagesEnabled = selected === 'messages';
  const isPostsEnabled = selected === 'posts';

  return (
    <View style={styles.container}>
      <View style={styles.buttonsContainer}>
        <TouchableOpacity
          onPress={() => setSelected('messages')}
          style={[
            styles.buttonTextContainer,
            styles.buttonTextContainerLeft,
            isMessagesEnabled && styles.buttonTextContainerSelected,
          ]}>
          <Text
            style={[
              styles.buttonText,
              !isMessagesEnabled && styles.buttonTextDisabled,
            ]}>
            Messages
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => setSelected('posts')}
          style={[
            styles.buttonTextContainer,
            styles.buttonTextContainerRight,
            isPostsEnabled && styles.buttonTextContainerSelected,
          ]}>
          <Text
            style={[
              styles.buttonText,
              !isPostsEnabled && styles.buttonTextDisabled,
            ]}>
            Posts
          </Text>
        </TouchableOpacity>
      </View>
      {messages.map(({avatar, from, hr, message}, index) => (
        <View key={index} style={styles.messageContainer}>
          <Image style={styles.messageAvatar} source={avatar} />
          <View style={styles.messageBody}>
            <Text style={styles.from}>{from}</Text>
            <Text style={styles.message}>{message}</Text>
          </View>
          <View style={{}}>
            <Text style={styles.hr}>{hr}</Text>
          </View>
        </View>
      ))}
      <TouchableOpacity>
        <LinearGradient
          start={{x: 0, y: 1}}
          end={{x: 0, y: 0}}
          colors={palette.orangeGradient}
          style={styles.bottomContainer}>
          <Text style={styles.bottomText}>View messages</Text>
          <Image style={{}} source={ICON_ARROW} />
        </LinearGradient>
      </TouchableOpacity>
    </View>
  );
};

export default Messages;
