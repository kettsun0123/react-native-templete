import { Navigation } from 'react-native-navigation';
import { MainScreen } from './MainScreen';

export function registerScreens() {
  Navigation.registerComponent('templete.Main', () => MainScreen);
}