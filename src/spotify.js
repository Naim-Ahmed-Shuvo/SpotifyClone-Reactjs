export const endPoint = 'https://accounts.spotify.com/authorize';

export const redirectURI = 'http://localhost:3000';

 const clientID = "bb21bb50667e473694f4fceb91fa3fb9";

 const scops = [
    "user-read-currently-playing",
    "user-read-recently-played",
    "user-read-playback-state",
    "user-top-read",
    "user-modify-playback-state"
]

export const getTokenFromUrl = () => {
    return window.location.hash.substring(1).split('&').reduce((initial,item)=>{
        let parts = item.split('=');
        initial[parts[0]] = decodeURIComponent(parts[1]);
        return initial;
    },{})
}

export const loginUrl = `${endPoint}?client_id=${clientID}&redirect_uri=${redirectURI}&scops=${scops.join("%20")}&response_type=token&show_dialog=true`