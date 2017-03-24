import React from 'react';
import { Text, View, Image, ScrollView, ListView } from 'react-native';
import styled from 'styled-components/native';
import newsList from './news.json';
import NewsListItem from '../news-list-item';

const MainContainer = styled.View`
  background-color: #E0E0E0;
`;

const ListSeparator = styled.View`
  height: 16;
`;

const ListItemContainer = styled.View`
  background-color: #FFFFFF;
  shadow-color: rgba(0,0,0,0.23);
  shadow-offset: 0 3;
  shadow-radius: 6;
  elevation: 4;
`;

export default class NewsPage extends React.Component {
  constructor(props){
    super(props)

    const listDataSource = new ListView.DataSource({rowHasChanged: (row1, row2) => row1 !== row2});

    this.state = {
      listDataSource: listDataSource.cloneWithRows(newsList)
    }

    this._renderListItem = this._renderListItem.bind(this);
    this._renderSeparator = this._renderSeparator.bind(this);
  }

  _renderListItem(newsItem) {
    return (
      <ListItemContainer>
        <NewsListItem newsItem={newsItem} />
      </ListItemContainer>
    );
  }

  _renderSeparator(sectionid, rowId) {
    return <ListSeparator key={rowId}/>
  }

  render() {
    return (
      <MainContainer>
        <ListView
          dataSource={this.state.listDataSource}
          renderRow={this._renderListItem}
          renderSeparator={this._renderSeparator}
        />
      </MainContainer>
    );
  }
}
