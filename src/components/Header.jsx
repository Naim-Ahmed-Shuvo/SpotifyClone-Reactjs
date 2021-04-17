import React from 'react';
import '../css/Header.css';
import SearchIcon from '@material-ui/icons/Search';
import { Avatar } from '@material-ui/core';
import { useStateValue } from '../store/DataLayer';

// 
const Header = () => {
    const [{user},] = useStateValue();

    // 
    return (
        <div className="header">
            <div className="header_left">
                <SearchIcon/>
                <input type="text" placeholder="Search "/>
            </div>
            <div className="header_right">
                <Avatar src={user?.images[0]?.url}/>
                <h4>{user?.display_name}</h4>
            </div>
        </div>
    );
};

export default Header;