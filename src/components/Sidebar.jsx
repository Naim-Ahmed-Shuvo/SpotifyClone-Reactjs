import React from 'react';
import '../css/Sidebar.css'
import SidebarOptions from './SidebarOptions';

import HomeIcon from '@material-ui/icons/Home';
import SearchIcon from '@material-ui/icons/Search';
import LibraryMusicIcon from '@material-ui/icons/LibraryMusic';
import { useStateValue } from '../store/DataLayer';

// 
const Sidebar = () => {
    const [{playlists}] = useStateValue();

    // 
    return (
        <div className="sideBar">
            <div className="sidebar_logo_conatiner">
                <img className="sidebar__logo" src="https://www.freepnglogos.com/uploads/spotify-logo-png/spotify-icon-marilyn-scott-0.png" alt=""/>
                <h4 className="sidebar_logo_title">Spotify</h4>
            </div>

            <SidebarOptions title="Home" Icon={HomeIcon} />
            <SidebarOptions title="Search" Icon={SearchIcon}  />
            <SidebarOptions title="Your Library" Icon={LibraryMusicIcon}  />
            <br/>
            <strong className="sidebar_title">PLAY LISTS</strong>
           <hr/>
           {playlists?.items?.map((playlist)=>{
               return <SidebarOptions title={playlist.name}  />
           })}
           
            
        </div>
    );
};

export default Sidebar;