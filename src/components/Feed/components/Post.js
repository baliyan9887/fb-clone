import React from 'react';
import './Post.css'
import { Avatar, Button } from '@material-ui/core';

import VideocamIcon from '@material-ui/icons/Videocam';
import PhotoLibraryIcon from '@material-ui/icons/PhotoLibrary';
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';
import { useStateValue } from '../../../stateProvider';

import firebase from 'firebase';
import db from '../../../firebase-config';

function Post() {
    const[{user}, dispatch] = useStateValue();
    const[input, setInput] = React.useState('');
    const[url, setUrl] = React.useState('')

    const handleSubmit = (e) => {
        e.preventDefault();

        // For User 

        db.collection('userPosts').doc(user.uid).collection('posts').add(
            {
                message: input,
                timestamp: firebase.firestore.FieldValue.serverTimestamp(),
                profileImg: user.photoURL,
                username: user.displayName,
                image: url
            }
        )

        // For ALL
        db.collection('posts').add(
            {
                message: input,
                timestamp: firebase.firestore.FieldValue.serverTimestamp(),
                profileImg: user.photoURL,
                username: user.displayName,
                image: url
            }
        )

        setUrl('');
        setInput('');
    }

    return (
        <div className ="post">
            <div className="post_top">
                <Avatar src={user.photoURL}/>
                <form>
                    <input 
                        value={input} 
                        onChange = {e => setInput(e.target.value)}
                        className="post_input" 
                        type="text" 
                        placeholder= {`What's on your mind? ${user.displayName}`}
                    />
                    <input 
                        value ={url}
                        onChange = {e => setUrl(e.target.value)}
                        type="text" 
                        placeholder="image URL (Optional)"
                    />
                    <Button onClick={handleSubmit} type = "submit" variant="contained">Post</Button>
                  
                </form>
            </div>
            <div className="post_bottom">
                <div className="post_option">
                    <VideocamIcon style={{color: "red"}} />
                    <h3>Live Video</h3>
                </div>
                <div className="post_option">
                    <PhotoLibraryIcon style={{color: "green"}} />
                    <h3>Photo/Video</h3>
                </div>
                <div className="post_option">
                    <InsertEmoticonIcon style={{color: "red"}} />
                    <h3>Feeling/Activity</h3>
                </div>

            </div>
        </div>
    )
}

export default Post
