import React from 'react';
import { Text, View } from 'react-native';
import styled from 'styled-components/native';

const StyledView = styled.View`
  background-color: papayawhip;
  flex: 1;
  backgroundColor: #fff;
  alignItems: center;
  justifyContent: center;
`;

export default class App extends React.Component {
  render() {
    return (
      <StyledView>
        <Text>Open up App.js to start working on your app!</Text>
        <Text>Changes you make will automatically reload.</Text>
        <Text>Shake your phone to open the developer menu.</Text>
      </StyledView>
    );
  }
}
