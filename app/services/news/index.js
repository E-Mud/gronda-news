import newsList from './news.json';

export default {
  getNews: () => {
    return Promise.resolve(newsList)
  }
}
