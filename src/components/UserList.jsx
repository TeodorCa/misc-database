import React from 'react';
import UserItem from '../components/UserItem'

class UserList extends React.Component{
    constructor(props) {
        super(props);
    }
    // const { users } = props; 
render(){
    return(
        <div>
            <h2>Lista Utilizatori</h2>
           {
               this.props.users.map((user, index) => {
                    return <UserItem
                        key = {index}
                        name = {user.name}
                        email = {user.email}
                        salary = {user.salary}
                        isGoldClient = {user.isGoldClient}
                        image = {user.image}
                    />
                })
           } 
        </div>
    )

}
}

export default UserList;