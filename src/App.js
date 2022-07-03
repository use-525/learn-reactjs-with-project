import { useState, useEffect } from 'react';
import axios from 'axios';

import './App.css';
import SearchGenre from './components/SearchGenre'
import SearchPlayLists from './components/SearchPlayLists'
import API_KEY from './constants/API_KEY'
console.log(btoa(API_KEY.CLIENT_ID + ':' + API_KEY.CLIENT_SECRET))
axios.post('https://accounts.spotify.com/api/token', {
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded',
    'Authorization': 'Basic ' + btoa(API_KEY.CLIENT_ID + ':' + API_KEY.CLIENT_SECRET)
  },
  body:'grant_type=refresh_token'
})
  .then(res => {
    const token = res.data;
    console.log(token);
  })
  .catch(error => console.log(error));


const App = () => {
  const [genre, setGenre] = useState();
  useEffect(() => {
    // getGenreList();
    // return null;
  }, [genre])

  // const getGenreList = () => {
  //   console.log(genre)
  // }
  return (
    <div className="App">
      <h1> Hello, Spotify APP!</h1>
      <SearchGenre setGenre={setGenre} />
      <SearchPlayLists />
    </div>
  );
}

export default App;
