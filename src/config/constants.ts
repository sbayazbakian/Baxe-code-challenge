import {Platform} from 'react-native';

export const isIOS = Platform.OS === 'ios';

export const contactsUrl = 'https://fakerapi.it/api/v1/persons?_locale=en_US';
export const avatarUrl = (id: number) => `https://i.pravatar.cc/300?img=${id}`;
