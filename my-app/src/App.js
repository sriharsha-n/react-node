import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Header  from './components/Header'
import { Users } from './components/Users'
import { DisplayBoard } from './components/DisplayBoard'
import CreateUser from './components/CreateUser'
import { getAllUsersAPI, createUserAPI,deleteUserAPI } from './services/UserService'

function App(){
  const [user, setuser] = useState({});
  const [users, setusers] = useState([]);
  const [userscount, setuserscount] = useState(0);

  function createUser(e) {
    createUserAPI(user)
        .then(response => {
          console.log(response);
          setuserscount(userscount+1);
      });
      getAllUsers()
  }

  function getAllUsers(){
    getAllUsersAPI()
      .then(users => {
        // this.setState({users: users, numberOfUsers: users.length})
        setusers(users);
        setuserscount(users.length);
      });
  }

  function onChangeForm(e) {
      let user_local = user
      if (e.target.name === 'firstname') {
          user_local.firstName = e.target.value;
      } else if (e.target.name === 'lastname') {
          user_local.lastName = e.target.value;
      } else if (e.target.name === 'email') {
          user_local.email = e.target.value;
      }
      setuser(user_local);
  }

  function deleteUser(id){
    
      deleteUserAPI(id);
      getAllUsers();
  }

  function getUsersCount(){
    console.log("hi")
    getAllUsersAPI()
    .then(users_local => {
      setuserscount(users_local.length);
    });
  }
  getUsersCount();


    
    return (
      <div className="App">
        <Header></Header>
        <div className="container mrgnbtm">
          <div className="row">
            <div className="col-md-8">
                <CreateUser
                  user={user}
                  onChangeForm={onChangeForm}
                  createUser={createUser}
                  >
                </CreateUser>
            </div>
            <div className="col-md-4">
                <DisplayBoard
                  numberOfUsers={userscount}
                  getAllUsers={getAllUsers}
                >
                </DisplayBoard>
            </div>
          </div>
        </div>
        <div className="row mrgnbtm">
          <Users users={users} deleteuser={deleteUser}></Users>
        </div>
      </div>
    );
}

export default App;
