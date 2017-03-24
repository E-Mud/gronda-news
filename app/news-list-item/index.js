import React from 'react';
import { Text, View, Image } from 'react-native';
import styled from 'styled-components/native';

const MainContainer = styled.View`
  flex-direction: column;
  align-items: stretch;
  background-color: #FFFFFF;
  padding-bottom: 8;
`;

const NewsContent = styled.View`
  padding: 8;
`;

const NewsImage = styled.Image`
  height: 150;
`;

const NewsBody = styled.Text`
  opacity: 0.54;
`;

const NewsTitle = styled.Text`
  opacity: 0.74;
  font-size: 18;
  font-weight: bold;
`;

const NewsDate = styled.Text`
  opacity: 0.35;
  margin-top: 8;
  font-size: 12;
  font-style: italic;
`;

// <Image source={require('../assets/img/profile.jpg')}/>
export default class NewsListItem extends React.Component {
  render() {
    const newsItem = this.props.newsItem
    return (
      <MainContainer>
        <NewsImage source={{uri: newsItem.imageSrc}}>
        </NewsImage>
        <NewsContent>
          <NewsTitle>{newsItem.title}</NewsTitle>
          <NewsBody numberOfLines={this.props.fullBody ? null : 3}>{newsItem.body}</NewsBody>
          <NewsDate>Published by {newsItem.author} on {newsItem.date}</NewsDate>
        </NewsContent>
      </MainContainer>
    );
  }
}
