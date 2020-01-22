import Main from './components/Main';
import Chat from './components/Chat';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

const navigator = createStackNavigator({
  Main: { screen: Main },
  Chat: { screen: Chat },
},
{
  initialRouteName: 'Main',
  defaultNavigationOptions: {
    title: 'Realtime Chat'
  }
});

export default createAppContainer(navigator);