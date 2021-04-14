
import { useEffect } from 'react';
import './App.css';
import Login from './components/Login';
import SpotifyWebApi from 'spotify-web-api-js';
import { getTokenFromUrl } from './spotify';
import Player from './components/Player';
import {useStateValue} from './store/DataLayer'

// 
const spotify = new SpotifyWebApi()



// 
const  App =() => {
  const [ {user,token},dispatch] = useStateValue();
  // const [token,setToken] = useState(null);
  
  useEffect(()=>{
    const has = getTokenFromUrl();
    window.location.hash = '';
    const _token = has.access_token;
    if(_token){
      // setToken(_token);
      dispatch({
        type:"SET_TOKEN",
        token: _token
      })
      spotify.setAccessToken(_token);
      spotify.getMe().then(user=>{
       
        dispatch({
          type: 'SET_USER',
          user,
        })
      });

      // 
      spotify.getUserPlaylists().then(playlists=>{
        dispatch({
          type: "SET_PLAYLISTS",
          playlists
        })
      })
    }
    
    // console.log('access_token: ',_token );
  },[dispatch])

  console.log(" token: ",token);
  console.log(" 👨user: ",user);
  return (
    <div className="App">
      {!token?<Player spotify={spotify}/>:<Login/>}
      
    </div>
  );
}

export default App;
