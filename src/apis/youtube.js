import axios from 'axios';

const KEY = 'AIzaSyDZs0i8iyAQobVhA-8VyuixALqlAdd6F0A'

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    maxResults: 5,
    key: KEY
  }
});