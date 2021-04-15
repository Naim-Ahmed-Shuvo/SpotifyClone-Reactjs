import React from 'react';
import '../css/Footer.css';
import PlayCircleOutlineOutlinedIcon from '@material-ui/icons/PlayCircleOutlineOutlined';
import SkipPreviousIcon from '@material-ui/icons/SkipPrevious';
import SkipNextIcon from '@material-ui/icons/SkipNext';
import ShuffleIcon from '@material-ui/icons/Shuffle';
import RepeatIcon from '@material-ui/icons/Repeat';
import VolumeDown from '@material-ui/icons/VolumeDown';
import Slider from '@material-ui/core/Slider';
import VolumeUp from '@material-ui/icons/VolumeUp';
import PlaylistPlayIcon from '@material-ui/icons/PlaylistPlay';
import {Grid} from '@material-ui/core';

// 
const Footer = () => {
    return (
        <div className="footer">
            <div className="footer__left">
                <h1>Album and song details</h1>
            </div>
            <div className="footer__middle">
               <ShuffleIcon className="footer_green"/> 
               <SkipPreviousIcon className="footer_icon"/>
               <PlayCircleOutlineOutlinedIcon fontSize="large" className=""/>
               <SkipNextIcon className="footer_icon"/>
               <RepeatIcon className="footer_green"/>
            </div>
            <div className="footer__right">
            <Grid container spacing={2}>
                <Grid item>
                <PlaylistPlayIcon />
                </Grid>
                <Grid item xs>
                  <VolumeDown/>
                </Grid>
                <Grid item>
                <Slider  />
                </Grid>
            </Grid>
            </div>
        </div>
    );
};

export default Footer;