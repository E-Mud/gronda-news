import React from 'react';
import { View, Image } from 'react-native';
import styled from 'styled-components/native';
import { MainText, SecondaryText } from '../text';
import AvatarService from '../services/avatar';

const MainContainer = styled.View`
  flex-direction: row;
  align-items: stretch;
`;

const ElevatedContainer = styled.View`
  background-color: #FFFFFF;
  shadow-color: rgba(0,0,0,0.23);
  shadow-offset: 0 3;
  shadow-radius: 6;
  elevation: 4;
`;

const AvatarContainer = styled(ElevatedContainer)`
  margin-right: 8;
  height: 50;
  width: 50;
  border-radius: 25;
`;

const Avatar = styled.Image`
  height: 50;
  width: 50;
  border-radius: 25;
`;

const CommentMainContent = styled(ElevatedContainer)`
  flex: 1;
  border-radius: 4;
  padding: 8;
`;

export default class Comment extends React.Component {
  render() {
    const comment = this.props.comment

    return (
      <MainContainer>
        <AvatarContainer>
          <Avatar source={{uri: AvatarService.parseAvatarURL(comment.author)}} />
        </AvatarContainer>
        <CommentMainContent>
          <SecondaryText size="small" italic>{comment.author} on {comment.date}</SecondaryText>
          <MainText>{comment.body}</MainText>
        </CommentMainContent>
      </MainContainer>
    );
  }
}
