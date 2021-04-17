
import React from 'react';
import '../css/Body.css';
import { useStateValue } from '../store/DataLayer';
import Header from './Header';
import FavoriteIcon from '@material-ui/icons/Favorite';
import PlayCircleFilledIcon from '@material-ui/icons/PlayCircleFilled';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import Songrow from './Songrow';

// 
const Body = ({spotify}) => {
    const [{discover_weekly}] = useStateValue();

    // 
    return (
        <div className="body">
            <Header  spotify={spotify}/>
            <div className="body_info">
                <img src={discover_weekly?.images[0]?.url} alt="img"/>
                <div className="body_info_text">
                    <strong>PLAYLIST</strong>
                    <h2>Discover Weekly</h2>
                    <p>{discover_weekly?.description}</p>
                </div>
            </div>
            <div className="body_songs">
                <div className="body_icons">
                   <PlayCircleFilledIcon className="body_shuffle"/>
                   <FavoriteIcon fontsize="large"/>
                   <MoreHorizIcon/>
                </div>
            </div>

            {/*  */}
            {discover_weekly?.tracks?.items.map(item=>{
                return <Songrow track={item.track}/>
            })}
        </div>
    );
};

export default Body;