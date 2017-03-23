import React from 'react';
import { Text, View, Image } from 'react-native';
import styled from 'styled-components/native';
import { Ionicons } from '@expo/vector-icons';

const StyledView = styled.View`
  flex: 1;
  background-color: #fff;
  align-items: center;
  justify-content: center;
  padding: 24;
`;

const ProfileImage = styled.Image`
  height: 200;
  width: 200;
  border-radius: 100;
  margin-bottom: 16
`;

export default class ProfilePage extends React.Component {
  render() {
    return (
      <StyledView>
        <ProfileImage source={require('../assets/img/profile.jpg')}/>
        <Text>Hi there I'm Alberto Casares</Text>
        <Text>
          I made this app with the purpose of bringing you the latest news from meneame. Enjoy <Ionicons name="md-heart" size={16} />
        </Text>
      </StyledView>
    );
  }
}
