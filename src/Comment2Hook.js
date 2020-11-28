import React, {useState} from 'react';
import CommentListHook from "./CommentListHook";
import Comment2ListHook from "./Comment2ListHook";

const Comment2Hook = () => {
    const [data, setData] = useState([]);

    const selectHandler = event => {
        fetch(`https://jsonplaceholder.typicode.com/posts/${event.target.value}/comments`)
            .then(response => response.json())
            .then(data => setData(data));
    };

    return (
        <>
            <p style={{display: "inline-block", marginRight: 15}}>Choose post ID:</p>
            <select style={{display: "inline-block", marginRight: 15}} onChange={selectHandler}>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
            </select>
            <Comment2ListHook arr={data}/>
        </>
    )
};

export default Comment2Hook;