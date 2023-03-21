const AVATAR_1 = require('./img/avatar_chat.png');
const AVATAR_2 = require('./img/avatar_1.png');
const CARD_ICON = require('./img/card_icon.png');
const RIBBON_ICON = require('./img/ribbon_icon.png');

const services = [
  {
    title: 'Pay Offline With BAXE Card',
    subtitle: 'Easy Pay & Free Fee',
    icon: CARD_ICON,
  },
  {
    title: '1 More Step to Higher Account Level',
    subtitle: 'Easy Pay & Free Fee',
    icon: RIBBON_ICON,
  },
];

const messages = [
  {
    from: 'Baxe',
    message: 'Welcome to BAXE APP',
    avatar: AVATAR_1,
    hr: '10:20 am',
  },
  {
    from: 'Anne',
    message: 'Hi, I just downloaded the BAXE App.',
    avatar: AVATAR_2,
    hr: '10:20 am',
  },
  {
    from: 'Jerome',
    message: 'Hi there.',
    avatar: AVATAR_2,
    hr: '10:20 am',
  },
];

export {services, messages};
