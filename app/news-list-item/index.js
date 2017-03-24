import React from 'react';
import { View, Image } from 'react-native';
import styled from 'styled-components/native';
import { MainText, Title, SecondaryText } from '../text';

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
  opacity: 0.9;
  height: 150;
`;

const Footer = styled.View`
  margin-top: 8;
`;

export default class NewsListItem extends React.Component {
  render() {
    const newsItem = this.props.newsItem
    return (
      <MainContainer>
        <NewsImage source={{uri: newsItem.imageSrc}}>
        </NewsImage>
        <NewsContent>
          <Title>{newsItem.title}</Title>
          <MainText numberOfLines={this.props.fullBody ? null : 3}>{newsItem.body}</MainText>
          <Footer>
            <SecondaryText size="small" italic>
              Published by <SecondaryText primary>{newsItem.author}</SecondaryText> on {newsItem.date}
            </SecondaryText>
          </Footer>
        </NewsContent>
      </MainContainer>
    );
  }
}
