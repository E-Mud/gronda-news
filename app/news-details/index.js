import React from 'react';
import { View, ScrollView } from 'react-native';
import styled from 'styled-components/native';
import NewsListItem from '../news-list-item';
import Comment from '../comment';

const MainContainer = styled.ScrollView`
  background-color: #E0E0E0;
`;

const CommentListItem = styled.View`
  padding: 8 16 8 16;
`;

const NewsContent = styled(NewsListItem)`
  background-color: #FFFFFF;
  shadow-color: rgba(0,0,0,0.23);
  shadow-offset: 0 3;
  shadow-radius: 6;
  elevation: 4;
`;

export default class NewsDetails extends React.Component {
  _renderCommentList(newsItem) {
    if(newsItem.commentList && newsItem.commentList.length) {
      return newsItem.commentList.map((comment, index) => {
        return (
          <CommentListItem key={index}>
            <Comment comment={comment} />
          </CommentListItem>
        );
      })
    }else{
      return null;
    }
  }

  render() {
    return (
      <MainContainer>
        <NewsContent newsItem={this.props.newsItem} fullBody={true}/>
        {this._renderCommentList(this.props.newsItem)}
      </MainContainer>
    );
  }
}
