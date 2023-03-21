import {Dispatch, PropsWithChildren} from 'react';
import {IContact} from 'src/config/types';

export interface IAction {
  type: string;
  payload?: unknown;
}

export interface IContactsContextType {
  actions: {
    fetchContacts(): void;
  };
  dispatch: Dispatch<IAction>;
  state: IState;
}

export type ContactsProviderProps = PropsWithChildren;

export interface IState {
  contacts: IContact[];
  loading: boolean;
  error: boolean;
}
