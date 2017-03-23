import React from 'react';
import { Text, View, Image, ScrollView } from 'react-native';
import styled from 'styled-components/native';
import newsList from './news.json';
import NewsListItem from '../news-list-item';

const MainContainer = styled.ScrollView`
  background-color: #E0E0E0;
`;

export default class NewsPage extends React.Component {
  render() {
    return (
      <MainContainer>
        <NewsListItem newItem={newsList[0]} />
      </MainContainer>
    );
  }
}
