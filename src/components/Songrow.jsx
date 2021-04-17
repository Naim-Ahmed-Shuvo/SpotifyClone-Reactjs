import React from 'react';
import '../css/Songrow.css';

//
const Songrow = ({track}) => {
    return (
        <div className="songrow">
           <img src={track.album.images[0].url} alt="img" className="songrow_album"/>
           <div className="songrow_info">
               <h1>{track.name}</h1>
               <p>
                   {track.artists.map(artist=> artist.name).join(',')} - {" "}
                   {track.album.name}
               </p>
           </div>
        </div>
    );
};

export default Songrow;