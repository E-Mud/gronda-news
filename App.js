import React from 'react';
import { Text } from 'react-native';
import ProfilePage from './app/profile-page';
import NewsList from './app/news-list';
import NewsDetails from './app/news-details';

import {
  createRouter,
  StackNavigation,
  TabNavigation,
  TabNavigationItem,
  NavigationProvider
} from '@expo/ex-navigation';

const Router = createRouter(() => ({
  main: () => MainScreen,
  newsDetails: () => NewsDetails
}));

class MainScreen extends React.Component {
  constructor(props){
    super(props)

    this._showNewsDetails = this._showNewsDetails.bind(this);
  }

  _renderTitle(isSelected, title) {
    return (
      <Text>
        {title}
      </Text>
    );
  }

  _showNewsDetails(newsItem) {
    this.props.navigator.push(Router.getRoute('newsDetails', {newsItem}))
  }

  render() {
    return (
      <TabNavigation
        id="tab-navigation"
        navigatorUID="tab-navigation"
        initialTab="news">
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
          <NewsList onNewsClicked={this._showNewsDetails}/>
        </TabNavigationItem>
      </TabNavigation>
    );
  }
}

export default class App extends React.Component {
  render() {
    return (
      <NavigationProvider router={Router}>
        <StackNavigation initialRoute="main" />
      </NavigationProvider>
    );
  }
}
