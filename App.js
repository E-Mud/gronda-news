import React from 'react';
import { Text } from 'react-native';
import ProfilePage from './app/profile-page';
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
        initialTab="profile">
        <TabNavigationItem
          id="profile"
          title="Profile"
          renderTitle={this._renderTitle}>
          <ProfilePage />
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
