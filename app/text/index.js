import React from 'react';
import { Text } from 'react-native';
import styled from 'styled-components/native';
import { Colors } from '../constants';

const fontSizes = {
  large: 18,
  normal: 14,
  small: 12
}

export const RegularText = styled.Text`
  color: ${(props) => props.primary ? Colors.PRIMARY : Colors.BLACK};
  font-style: ${(props) => props.italic ? 'italic' : 'normal'};
  text-align: ${(props) => props.align || 'auto'};
  font-size: ${(props) => fontSizes[props.size] || fontSizes.normal};
`;

export const MainText = styled(RegularText)`
  opacity: 0.54;
`;

export const Title = styled(RegularText)`
  opacity: 0.74;
  font-size: 18;
  font-weight: bold;
`;

export const SecondaryText = styled(RegularText)`
  opacity: 0.35;
`;
