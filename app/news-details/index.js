import React from 'react';
import NewsListItem from '../news-list-item';

export default class NewsDetails extends React.Component {
  render() {
    return (
      <NewsListItem newsItem={this.props.newsItem} fullBody={true}/>
    );
  }
}
