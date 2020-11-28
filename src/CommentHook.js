import React, {useState} from 'react';

const CommentHook = () => {
    const [data, setData] = useState([]);

    const selectHandler = event => {
        fetch(`https://jsonplaceholder.typicode.com/posts/${event.target.value}/comments`)
            .then(response => response.json())
            .then(data => setData(data));
    };

    return (
        <>
            <p style={{display: "inline-block", marginRight: 15}}>Choose post ID:</p>
                <select style={{display: "inline-block"}} onChange={selectHandler}>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                </select>
            {data.map(({id, title, body}) => (
                    <section key={id}>
                        <h2>{id}. {title}</h2>
                        <p>{body}</p>
                    </section>
                )
            )}
        </>
    )
};

export default CommentHook;