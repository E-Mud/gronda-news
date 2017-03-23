import React from 'react';
import { Text } from 'react-native';
import HomePage from './app/home-page';
import {
  createRouter,
  StackNavigation,
  TabNavigation,
  TabNavigationItem,
  NavigationProvider
} from '@expo/ex-navigation';

class MainScreen extends React.Component {
  _renderTitle(isSelected, title) {
    return (
      <Text>
        {title}
      </Text>
    );
  }

  render() {
    return (
      <TabNavigation
        id="tab-navigation"
        navigatorUID="tab-navigation"
        initialTab="home">
        <TabNavigationItem
          id="home"
          title="Home"
          renderTitle={this._renderTitle}>
          <HomePage />
        </TabNavigationItem>
        <TabNavigationItem
          id="news"
          title="News"
          renderTitle={this._renderTitle}>
          <Text>SUP</Text>
        </TabNavigationItem>
      </TabNavigation>
    );
  }
}

const Router = createRouter(() => ({
  main: () => MainScreen,
}));

export default class App extends React.Component {
  render() {
    return (
      <NavigationProvider router={Router}>
        <StackNavigation initialRoute="main" />
      </NavigationProvider>
    );
  }
}
