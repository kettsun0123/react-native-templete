import { Navigation } from 'react-native-navigation';

import { registerScreens } from './screen';

registerScreens();

Navigation.startSingleScreenApp({
  screen: {
    screen: 'templete.Main'
  }
});
