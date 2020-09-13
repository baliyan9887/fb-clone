import React from 'react';
import './PostFeed.css'
import { Avatar } from '@material-ui/core';

import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline';
import NearMeIcon from '@material-ui/icons/NearMe';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import ExpandMoreOutlinedIcon from '@material-ui/icons/ExpandMoreOutlined';



function PostFeed({ profileImg, image, username, timestamp, message}) {
    return (
        <div className="postFeed">
            <div className="postFeed_top">
                <Avatar src={profileImg} className='postFeed_user'/>
                <div className="postFeed_topInfo">
                    <h3>{username}</h3>
                    
                    <p> {timestamp} </p>
                </div>
            </div>
            <div className="postFeed_bottom">
                <p>{message}</p>
            </div>
            <div className="postFeed_image">
                <img src={image} alt="" />
            </div>
            <div className="postFeed_options">
                <div className="postFeed_option">
                    <ThumbUpIcon />
                    <p>Like</p>
                </div>
                <div className="postFeed_option">
                    <ChatBubbleOutlineIcon />
                    <p>Comment</p>
                </div>
                <div className="postFeed_option">
                    <NearMeIcon />
                    <p>Share</p>
                </div>
                <div className="postFeed_option">
                    <AccountCircleIcon />
                    <ExpandMoreOutlinedIcon />
                    
                </div>

            </div>
        </div>
    )
}

export default PostFeed
