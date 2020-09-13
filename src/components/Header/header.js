import React from 'react';
import './header.css';
import SearchIcon from '@material-ui/icons/Search';
import HomeIcon from '@material-ui/icons/Home';
import FlagIcon from '@material-ui/icons/Flag';
import SupervisedUserCircleIcon from '@material-ui/icons/SupervisedUserCircle';
import AddIcon from '@material-ui/icons/Add';
import ForumIcon from '@material-ui/icons/Forum';
import NotificationsActiveIcon from '@material-ui/icons/NotificationsActive';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

import { Avatar, IconButton } from '@material-ui/core';
import { useStateValue } from '../../stateProvider';


function Header() {

    const [{user}, disptach] = useStateValue();
    return (
        <div className="header">
            <div className="left_head">
                <img 
                    src="https://facebookbrand.com/wp-content/uploads/2019/04/f_logo_RGB-Hex-Blue_512.png" 
                    alt=""
                />
                <div className="input_head">
                    <SearchIcon />
                    <input placeholder="Search...." type="text" />
                </div>
            </div>
            <div className="middle_head">
                <div className="menu_head menu_head_active">
                    <HomeIcon fontSize="large"/>
                </div>
                <div className="menu_head">
                    <FlagIcon fontSize="large"/>
                </div>
                <div className="menu_head">
                    <SupervisedUserCircleIcon fontSize="large"/>
                </div>

            </div>
            <div className="right_head">
                <div className="info_head">
                    <Avatar src ={user.photoURL} />
                    <h4>{user.displayName}</h4>
                </div>
                <IconButton>
                    <AddIcon />
                </IconButton>
                <IconButton>
                    <ForumIcon />
                </IconButton>
                <IconButton>
                    <NotificationsActiveIcon />
                </IconButton>
                <IconButton>
                    <ExpandMoreIcon />
                </IconButton>
            </div>
        </div>
    )
}

export default Header;

