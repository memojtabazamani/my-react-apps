import React, {useState, useEffect} from 'react';
import axios from 'axios';

const CardPost = ({postId}) => {

    const [post, setPost] = useState([]);

    const retreiveData = async (postId) => {
        let {data} = await axios.get(`https://jsonplaceholder.typicode.com/posts/${postId}`);
        setPost(data);
    }

    useEffect(() => {
        retreiveData(postId);
    }, [postId]);

    return (
        <div className="card">
            <div className="content">
                <h1 className="ui header">{ post.title } - { post.id } </h1>
                <div className="description">
                    {post.body}
                </div>
            </div>
        </div>
    )
}

export default CardPost;