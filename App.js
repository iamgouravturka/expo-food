import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import ResultsShowScreen from './src/screens/ResultShowScreen';
import SearchScreen from './src/screens/SearchScreen'

const navigator = createStackNavigator({
  Search: SearchScreen,
  ResultShow: ResultsShowScreen
},{
  initialRouteName: 'Search',
  defaultNavigationOptions: {
    title: 'BusinessSearch'
  }
})

export default createAppContainer(navigator)
