import React from 'react';
import './Feed.css';
import Post from './components/Post';
import PostFeed from './components/PostFeed';
import db from '../../firebase-config';
import moment from 'moment';


function Feed() {
    const [posts, setPosts] = React.useState([]);
    // const [time, setTime] = React.useState(new Date());
   

    React.useEffect(() => {
        db.collection('posts').orderBy("timestamp", "desc").onSnapshot((snapshot) => 
            setPosts(snapshot.docs.map((doc) => ({ id: doc.id, data: doc.data() })))
        );

        // posts.map((post) => 
        //     setTime(post.data.timestamp.toDate())
        // )

        // console.log('Post time', time)
    }, [])

 


    return (
        <div className ="feed">
            <Post />
            {
                posts.map((post) => (
                    <PostFeed 
                        key={post.id}
                        profileImg={post.data.profileImg}
                        message={post.data.message}
                        timestamp = {post.data.timestamp == null ? 'timestamp' : moment(post.data.timestamp.toDate()).format('lll')}
                        username= {post.data.username}
                        image= {post.data.image}
                    />
                ))
            }
            {/* <PostFeed 
                profileImg='https://avatars2.githubusercontent.com/u/31700398'
                message='Worked!!'
                timestamp ='timestamp'
                username='gk_on'
                image='https://images.unsplash.com/photo-1599495194984-fc8baaf52e80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=751&q=80'  
                /> */}
               

        </div>
    )
}

export default Feed
