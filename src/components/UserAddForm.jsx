// React ne permite sa scriem jsx, deci il importam peste tot unde avem nev de jsx
import React from 'react';
import './UserAddForm.css';

class UserAddForm extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            name: '',
            email: '',
            isGoldClient: false

        }
    }   

    handleNameChange(event) {
        console.log(event.target.value);
        const name = event.target.value;
        this.setState({name});
    }

    handleEmailChange(event) {
        console.log(event.target.value);
        const email = event.target.value;
        this.setState({email: event.target.value});
    }

    handleIsGoldClientChange(event) {
        console.log(event.target.checked);
        this.setState({isGoldClient: event.target.checked})
        
    }

    handleSubmit(event) {
        event.preventDefault();
        console.log(this.props.addNewUserProp);
        const addNewUserProp = this.props.addNewUserProp;
        const {name, email, isGoldClient} = this.state;
        addNewUserProp(name, email, isGoldClient);
        
        
    }

    render() {
        return(
            <form 
            className="user-add-form" 
            onSubmit={(event) => this.handleSubmit(event)}>
                <h2>Formular adaugare utilizator:</h2>
                <label htmlFor="name">Nume:</label>
                <input type="text"
                 name="name"
                 onChange={(event) => this.handleNameChange(event)}/>
            

                <label htmlFor="email">Email:</label>
                <input type="email" name="email"
                onChange={(event) => this.handleEmailChange(event)}/>


                <label htmlFor="is-gold-client">E client gold</label>
                <input type="checkbox" name="isGoldClient"
                onChange={(event) => this.handleIsGoldClientChange(event)}/>
                

                <input type="submit"/>
            </form>
        )
    }


}

export default UserAddForm;