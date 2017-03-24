import React from 'react';
import { View, Image } from 'react-native';
import styled from 'styled-components/native';
import { MainText, Title, SecondaryText } from '../text';
import CommentCount from '../comment-count';

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
  flex-direction: row;
  align-items: stretch;
  justify-content: space-between;
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
            <SecondaryText style={{flex: 1}} size="small" italic>
              Published by <SecondaryText primary>{newsItem.author}</SecondaryText> on {newsItem.date}
            </SecondaryText>
            <CommentCount count={newsItem.commentList.length} />
          </Footer>
        </NewsContent>
      </MainContainer>
    );
  }
}
