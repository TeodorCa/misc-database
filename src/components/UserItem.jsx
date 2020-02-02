// React ne permite sa scriem jsx, deci il importam peste tot unde avem nev de jsx
import React from 'react';

function UserItem(props){
    console.log(props);
    // cauta object destructuring
    const {name, email, salary, isGoldClient, image} = props;

    return(
        <div>
            <p>{name}</p>
            <p>{email}</p>
            <p>{salary}</p>
            { isGoldClient 
                ?<p>Client GOLD</p>
                :<p>Client Normal</p>
            }
            <img src={image} alt="Nu merge poza fgm de prost" width="200px" height="200px"/>
        </div>

    )


}

export default UserItem;