import axios from 'axios';

const getData = (url)=>{
  return axios(url)
}
export default getData;

// https://api.themoviedb.org/3/movie/popular?api_key=aab69345023f012e488f5334e693cb59&language=en-US&page=1

// https://reqres.in/api/users?page=2