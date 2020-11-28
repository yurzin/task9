import React, {useState, useEffect} from "react";

const Comment2ListHook = ({arr}) => {

    const [data, setData] = useState([]);

    useEffect(() => {
        if (arr.length > 0) {
            setData(arr)
        }
    },  [arr]);

    const onlyEven = () => {
        const evenPost = arr.filter(id => id.id % 2 === 0);
        setData(evenPost);
    };

    return (
        <>
            <button onClick={onlyEven}>Only even comments</button>
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

export default Comment2ListHook;