import React from 'react';
import { SecondaryText } from '../text';
import { SimpleLineIcons } from '@expo/vector-icons';
import { Colors } from '../constants';

export default class CommentCount extends React.Component {
  render() {
    const count = this.props.count,
      hasComments = count > 0;

    return (
      <SecondaryText primary={hasComments}>
        <SimpleLineIcons name="speech" color={hasComments > 0 ? Colors.PRIMARY : Colors.BLACK} />
        {' ' + count}
      </SecondaryText>
    );
  }
}
