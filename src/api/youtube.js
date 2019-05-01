import axios from 'axios';

const KEY = 'AIzaSyCPuGalL_9OAoly-Z7rIRAOqPzAgwh9q00';

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    maxResult: 5,
    key: KEY
  }
});
