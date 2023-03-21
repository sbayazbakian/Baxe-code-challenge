/* eslint-disable react/no-unstable-nested-components */
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React from 'react';
import {Image, Text} from 'react-native';

import HomeScreen from 'src/screens/Home';
import Placeholder from 'src/screens/Placeholder';
import styles from './styles';

const Tab = createBottomTabNavigator();

const SCREENS = {
  HOME: 'Home',
  // add more screen names ..
};

const ICONS = {
  HOME: require('./img/home_icon.png'),
  CHAT: require('./img/chat_icon.png'),
  COMMUNITY: require('./img/community_icon.png'),
  FINANCE: require('./img/finance_icon.png'),
  ECOSYSTEM: require('./img/ecosystem_icon.png'),
};

const App = (): JSX.Element => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Tab.Screen
        name={SCREENS.HOME}
        component={HomeScreen}
        options={{
          tabBarLabel: () => (
            <Text style={[styles.label, styles.selected]}>Home</Text>
          ),
          tabBarIcon: () => <Image source={ICONS.HOME} />,
        }}
      />
      <Tab.Screen
        name="Chat"
        component={Placeholder}
        options={{
          tabBarLabel: () => <Text style={styles.label}>Chat</Text>,
          tabBarIcon: () => <Image source={ICONS.CHAT} />,
        }}
      />
      <Tab.Screen
        name="Community"
        component={Placeholder}
        options={{
          tabBarLabel: () => <Text style={styles.label}>Community</Text>,
          tabBarIcon: () => <Image source={ICONS.COMMUNITY} />,
        }}
      />
      <Tab.Screen
        name="Finance"
        component={Placeholder}
        options={{
          tabBarLabel: () => <Text style={styles.label}>Finance</Text>,
          tabBarIcon: () => <Image source={ICONS.FINANCE} />,
        }}
      />
      <Tab.Screen
        name="Ecosystem"
        component={Placeholder}
        options={{
          tabBarLabel: () => <Text style={styles.label}>Ecosystem</Text>,
          tabBarIcon: () => <Image source={ICONS.ECOSYSTEM} />,
        }}
      />
    </Tab.Navigator>
  );
};

export default App;
