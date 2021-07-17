import React, {useState, useEffect} from 'react';
import axios from 'axios';
import CardPost from './CardPost';

const AppPost = () => {
    const [resultPosts, setPosts] = useState([]);
    const [activePost, setActivePost] = useState(1);

    const retreiveData = async () => {
        let {data} = await axios.get('https://jsonplaceholder.typicode.com/posts');
        // limit array response!
        data = data.splice(0, 20);
        setPosts(data);
    }

    useEffect(() => {
        retreiveData();
    }, []);

    return (
        <>
            <div className="ui one column grid container" style={{marginTop: "50px"}}>
                <CardPost postId={activePost}/>
            </div>
            <div className="ui four column grid container" style={{marginTop: "50px"}}>
                {
                    resultPosts.map(post => {
                        return <div className="column">
                            <div className="ui card">
                                <div className="content">
                                    <div className="left aligned header">
                                        Post - {post.id}
                                    </div>
                                </div>
                                <div className="extra content">
                                    <div className="five ui buttons blue">
                                        <div className="ui  button info" tabIndex="0">
                                            <div className="content" onClick={e => setActivePost(post.id)}> See Detail...</div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    })
                }
            </div>
        </>
    )
}

export default AppPost;