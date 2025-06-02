import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import SplashScreen from './index';
import Login from './Login';
import HomeScreen from './HomeScreen';

const AppNavigator = createStackNavigator(
  {
    Splash: SplashScreen,
    Login: Login,
  },
  {
    initialRouteName: 'index',
  }
);

export default createAppContainer(AppNavigator);
