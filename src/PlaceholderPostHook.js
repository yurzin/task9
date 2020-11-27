import React, {useState, useEffect} from 'react';

const PlaceHolderHook = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users/1/posts')
            .then(response => response.json())
            .then(data => {
                setData(data);
            });
    }, []);

    return (
        <>
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

export default PlaceHolderHook;