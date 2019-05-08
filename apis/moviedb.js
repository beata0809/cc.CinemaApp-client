import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.themoviedb.org/3/movie/now_playing',
  params: {
    api_key: 'cf8cf1e6dd7616961e65e9ddc009f221',
  },
});
