import React from 'react';
import UserItem from './components/UserItem';
import './App.css';
import UserAddForm from './components/UserAddForm';
import UserList from './components/UserList';
import PostItem from './components/PostItem';
import PostList from './components/PostList';

// extends -> extinde fct oferite de react.comoponent
class App extends React.Component {
  constructor() {
    // extinzi react.component
    super();
    this.state = {
      background: 'lightgrey',
      color: 'black',
      users: [ ],
      posts: [ ]
    };
  }

  componentDidMount() {
    // fetch('https://jsonplaceholder.typicode.com/users')
    //   .then(response => response.json())
    //   .then(json => {
    //     console.log(json);
    //     const updatedJson = json.map((object) => {
    //       return {
    //         ...object, 
    //         isGoldClient: true
    //       }
    //     })
    //     this.setState({ users: updatedJson })
    //   })

    // fetch('https://jsonplaceholder.typicode.com/posts')
    // .then(response => response.json())
    // .then(json => {
    //   console.log(json);
    //   const updatedJson = json.map((object) => {
    //     return {
    //       ...object, 
    //     }
    //   })
    //   this.setState({ posts: updatedJson })
    // })

  }

  handleBackgroundChange(event){
    console.log(this);
    this.setState({background: event.target.value});


  }

  handleTextColorChange(event){
    this.setState({color: event.target.value});
  }

  handleUsersDisplay(event){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(json => {
      console.log(json);
      const updatedUsers = json.map((object) => {
        return {
          ...object, 
          isGoldClient: true
        }
      })
      this.setState({ users: updatedUsers })
    })
  }

  handlePostsDisplay(event){
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    .then(json => {
      console.log(json);
      const updatedPosts = json.map((object) => {
        return{
          ...object
        }
      })
      this.setState({ posts: updatedPosts})
    })
  }


 addNewUser(name, email, isGoldClient){
   console.log(name, email, isGoldClient)
  //  NICIODATA in interiorul lui setState NU trebuie apara this.state adica "... THIS.state.users deoarece e asincron"
   this.setState((prevState) => {
     return {
     users: [
       ...prevState.users, 
       {
         name: name,
         email: email,
         isGoldClient: isGoldClient,
       }
     ]
    }
   }
   )
 }

// render -> returneaza ce returna inainte functia app
  render(){

    console.log(this.state);
   

    return (
      <div style={{background: this.state.background, color: this.state.color}} className="app">
       
       <UserAddForm 
        addNewUserProp={(name, email, isGoldClient) => this.addNewUser(name, email, isGoldClient)}
      />

        <input type='color' value="Schimba culoarea BG" onChange={(event) => this.handleBackgroundChange(event)}/>
        <input type='color' value="Schimba culoarea" onChange={(event) => this.handleTextColorChange(event)}/>
        <input type="button" value = "Afiseaza Useri" onClick={(event) => this.handleUsersDisplay(event)}/>
        <input type="button" value = "Afiseaza Posturi" onClick={(event) => this.handlePostsDisplay(event)}/>

       {
        this.state.background !== '#000000'
          ? <UserList users={this.state.users}/>
          : null
       }

       {
        this.state.background !== '#000000'
          ? <PostList posts={this.state.posts}/>
          : null
       }

       

       

      
        {/* <UserList users={this.state.users}
        
        /> */}
        {/* <UserItem 
          name="Leeane Graham" 
          email="leane.graham@gmail.com" 
          salary="5000" 
          isGoldClient={true}
          image="https://i.ytimg.com/vi/cSblrT8hBDc/maxresdefault.jpg"
        />
        <UserItem 
        name="Jean Calvin" 
        email="jean.calivn@gmail.com" 
        salary="6900" 
        isGoldClient={false}
        image="./src/pictures/A8G5bccg.jpg"
        /> */}
       


      </div>
    );

  }

}

export default App;
