import React from 'react';

import {contactsUrl} from 'src/config/constants';
import {IFakerApiPayload} from 'src/config/types';
import {
  ContactsProviderProps,
  IAction,
  IContactsContextType,
  IState,
} from './types';

const FETCH_CONTACTS_ERROR = 'FETCH_CONTACTS_ERROR';
const FETCH_CONTACTS_REQUEST = 'FETCH_CONTACTS_REQUEST';
const FETCH_CONTACTS_SUCCESS = 'FETCH_CONTACTS_SUCCESS';

const initialState: IState = {
  contacts: [],
  loading: false,
  error: false,
};

const reducer = (state: IState, action: IAction) => {
  switch (action.type) {
    case FETCH_CONTACTS_REQUEST:
      return {
        ...state,
        loading: true,
        error: false,
      };
    case FETCH_CONTACTS_SUCCESS:
      const {data} = action.payload as IFakerApiPayload;
      return {
        ...state,
        loading: false,
        contacts: data,
      };
    case FETCH_CONTACTS_ERROR:
      return {
        ...state,
        loading: false,
        error: true,
      };
    default:
      return state;
  }
};

export const ContactsContext = React.createContext<IContactsContextType>(
  {} as IContactsContextType,
);

export const ContactsProvider = ({
  children,
}: ContactsProviderProps): JSX.Element => {
  const [state, dispatch] = React.useReducer(reducer, initialState);

  const actions = {
    fetchContacts: async () => {
      try {
        dispatch({type: FETCH_CONTACTS_REQUEST});

        const response = await fetch(contactsUrl);
        const payload = await response.json();

        dispatch({
          type: FETCH_CONTACTS_SUCCESS,
          payload,
        });
      } catch (error) {
        dispatch({type: FETCH_CONTACTS_ERROR});
        console.warn(error);
      }
    },
  };

  return (
    <ContactsContext.Provider value={{state, dispatch, actions}}>
      {children}
    </ContactsContext.Provider>
  );
};
