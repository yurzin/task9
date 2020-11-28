import React from "react";

const CommentListHook = ({data}) => {
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

export default CommentListHook;