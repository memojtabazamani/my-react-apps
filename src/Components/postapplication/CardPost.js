import React, {useState, useEffect} from 'react';
import axios from 'axios';

const CardPost = ({postId}) => {

    const [post, setPost] = useState([]);
    const [loader, setLoader] = useState(true);

    // use async and wait keywords
    const retreiveData = async (postId) => {
        let {data} = await axios.get(`https://jsonplaceholder.typicode.com/posts/${postId}`);
        setPost(data);
        // Here hidden loading
        setLoader(false);
    };

    // When This component update or mounted!
    useEffect(() => {
        // call retrive function for show this data
        retreiveData(postId);
        // Here show loading
        setLoader(true);
    }, [postId]);


    if (loader) {
        return (<div className="ui segment full one column">
                <p></p>
                <div className="ui active dimmer">
                    <div className="ui loader"></div>
                </div>
            </div>
        )
    }
    return (
        <div className="card">
            <div className="content">
                <h1 className="ui header">{post.title} - {post.id} </h1>
                <div className="description">
                    {post.body}
                </div>
            </div>
        </div>)

}

export default CardPost;