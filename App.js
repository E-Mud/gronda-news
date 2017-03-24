import React from 'react';
import { Text, StyleSheet } from 'react-native';
import ProfilePage from './app/profile-page';
import NewsList from './app/news-list';
import styled from 'styled-components/native';
import NewsDetails from './app/news-details';
import { SimpleLineIcons } from '@expo/vector-icons';

import {
  createRouter,
  StackNavigation,
  TabNavigation,
  TabNavigationItem,
  NavigationProvider
} from '@expo/ex-navigation';

const PrimaryText = styled.Text`
  color: #1E8BC3
`;

const Router = createRouter(() => ({
  main: () => MainScreen,
  newsDetails: () => NewsDetails
}));

class MainScreen extends React.Component {
  constructor(props){
    super(props)

    this._showNewsDetails = this._showNewsDetails.bind(this);
  }

  _renderTitle(isSelected, title){
    if(isSelected){
      return <PrimaryText>{title}</PrimaryText>;
    }else{
      return <Text>{title}</Text>;
    }
  }

  _renderIcon(icon){
    return (isSelected) => {
      const color = isSelected ? '#1E8BC3' : 'black';

      return <SimpleLineIcons size={20} name={icon} color={color} />;
    }
  }

  _showNewsDetails(newsItem){
    this.props.navigator.push(Router.getRoute('newsDetails', {newsItem}))
  }

  render(){
    return (
      <TabNavigation
        id="tab-navigation"
        navigatorUID="tab-navigation"
        initialTab="news">
        <TabNavigationItem
          id="profile"
          title="Profile"
          renderTitle={this._renderTitle}
          renderIcon={this._renderIcon('user')}>
          <ProfilePage />
        </TabNavigationItem>
        <TabNavigationItem
          id="news"
          title="News"
          renderTitle={this._renderTitle}
          renderIcon={this._renderIcon('book-open')}>
          <NewsList onNewsClicked={this._showNewsDetails}/>
        </TabNavigationItem>
      </TabNavigation>
    );
  }
}

export default class App extends React.Component {
  render(){
    return (
      <NavigationProvider router={Router}>
        <StackNavigation initialRoute="main" />
      </NavigationProvider>
    );
  }
}
