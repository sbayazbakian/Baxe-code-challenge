import React, {useContext, useEffect} from 'react';
import {FlatList, Text, View} from 'react-native';

import LinearGradient from 'react-native-linear-gradient';
import Screen from 'src/components/Screen';
import {palette} from 'src/config/styles';
import {ContactsContext} from 'src/context';
import {IContactsContextType} from 'src/context/types';
import Balance from './components/Balance';
import ListItem from './components/ListItem';
import Messages from './components/Messages';
import Products from './components/Products';
import QuickPay from './components/QuickPay';
import {messages, services} from './data';
import styles from './styles';

const HomeScreen = (): JSX.Element => {
  const {state, actions} = useContext<IContactsContextType>(ContactsContext);

  useEffect(() => {
    actions.fetchContacts();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Screen>
      <LinearGradient
        start={{x: 0, y: 0}}
        end={{x: 0, y: 1}}
        colors={palette.whiteGradient}
        style={styles.container}>
        <View style={styles.inner}>
          <Text style={styles.title}>Hi There</Text>
          <Text style={styles.subtitle}>
            Fund your account to start investing.
          </Text>
          <View>
            <FlatList
              contentContainerStyle={styles.list}
              data={services}
              renderItem={ListItem}
              horizontal
            />
          </View>
          <Balance amounts={{euro: '0.00', baxe_cash: '5.621'}} />
          <QuickPay contacts={state.contacts} />
          <Text style={styles.sectionTitle}>Products</Text>
          <Products />
          <Messages messages={messages} />
        </View>
      </LinearGradient>
    </Screen>
  );
};

export default HomeScreen;
