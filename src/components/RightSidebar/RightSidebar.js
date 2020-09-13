import React from 'react';
import './RightSidebar.css'

import VideocamIcon from '@material-ui/icons/Videocam';
import SearchIcon from '@material-ui/icons/Search';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';

function RightSidebar() {
    return (
        <div className="rightSidebar">
            <div className="rightSidebar_option">
            <h4>Contacts</h4>
                <VideocamIcon />
                <SearchIcon />
                <MoreHorizIcon />
            </div>
        </div>
    )
}

export default RightSidebar
