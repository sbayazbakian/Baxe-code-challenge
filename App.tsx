import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import TabNavigator from './src/navigators/TabNavigator';

import {ContactsProvider} from 'src/context';

export default function App() {
  return (
    <ContactsProvider>
      <NavigationContainer>
        <TabNavigator />
      </NavigationContainer>
    </ContactsProvider>
  );
}
