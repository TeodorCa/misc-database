// React ne permite sa scriem jsx, deci il importam peste tot unde avem nev de jsx
import React from 'react';

function PostItem(props){
    console.log(props);
    // cauta object destructuring
    const {userId, id, title, body} = props;

    return(
        <div>
            <p>{userId}</p>
            <p>{id}</p>
            <p>{title}</p>
            <p>{body}</p>
        </div>

    )


}

export default PostItem;