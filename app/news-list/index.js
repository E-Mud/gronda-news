import React from 'react';
import { Text, View, Image, ScrollView, ListView, TouchableOpacity } from 'react-native';
import styled from 'styled-components/native';
import NewsListItem from '../news-list-item';
import NewsService from '../services/news';

const MainContainer = styled.View`
  background-color: #E0E0E0;
`;

const ListSeparator = styled.View`
  height: 16;
`;

const ListItemContainer = styled.View`
  background-color: #E0E0E0;
  border-bottom-width: 1;
  border-bottom-color: #E0E0E0;
  shadow-color: rgba(0,0,0,0.23);
  shadow-offset: 0 3;
  shadow-radius: 6;
  elevation: 4;
`;

export default class NewsList extends React.Component {
  constructor(props){
    super(props)

    this.dataSource = new ListView.DataSource({rowHasChanged: (row1, row2) => row1 !== row2});

    this.state = {listDataSource: this.dataSource.cloneWithRows([])}

    this._renderListItem = this._renderListItem.bind(this);
    this._renderSeparator = this._renderSeparator.bind(this);
    this._notifyNewsClicked = this._notifyNewsClicked.bind(this)
  }

  componentDidMount(){
    NewsService.getNews().then((newsList) => {
      this.setState({listDataSource: this.dataSource.cloneWithRows(newsList)})
    })
  }

  _notifyNewsClicked(newsItem){
    const onNewsClicked = this.props.onNewsClicked;

    if(onNewsClicked){
      return () => {
        onNewsClicked(newsItem)
      }
    }
  }

  _renderListItem(newsItem) {
    return (
      <ListItemContainer>
        <TouchableOpacity onPress={this._notifyNewsClicked(newsItem)}>
          <NewsListItem newsItem={newsItem}/>
        </TouchableOpacity>
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
          enableEmptySections={true}
          dataSource={this.state.listDataSource}
          renderRow={this._renderListItem}
          renderSeparator={this._renderSeparator}
        />
      </MainContainer>
    );
  }
}
