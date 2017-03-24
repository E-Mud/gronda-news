import newsList from './news.json';

export default {
  getNews: () => {
    const loadTime = Math.floor(Math.random() * 7) + 3;

    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(newsList)
      }, loadTime)
    })
  }
}
