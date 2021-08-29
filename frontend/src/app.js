import React from 'react';
import { useState } from 'react';
import axios from 'axios';

const App = () => {
  const [warrior, setWarrior] = useState(null);
  const [username, setUsername] = useState(null);
  const [password, setPassword] = useState(null);
  const [isCreateUserView, setIsCreateUserView] = useState(false);

  const handleOnChangeUsername = (e) => {
    setUsername(e.target.value);
  }

  const handleOnChangePassword = (e) => {
    setPassword(e.target.value);
  }

  const toggleIsCreateUserView = () => {
    setIsCreateUserView(!isCreateUserView);
  }

  const handleUserFormSubmit= (e) => {
    e.preventDefault()
    let body = {
      username: username,
      password: password,
      isCreateUser: isCreateUserView
    }
    axios.post('/users', body)
      .then(result => {
        let warriorData = result.data;
        setWarrior(warriorData);
      })
      .catch(err => {
        console.error(err)
      })
  }

  const AlreadyUser = () => {
    return (
      <>
        Already a warrior in Battle Arena? Click <span style={{fontWeight: 'bold', cursor: 'pointer'}} onClick={toggleIsCreateUserView}>here</span> to sign in!
      </>
    )
  }

  const CreateUser = () => {
    return (
      <>
        Or click <span style={{fontWeight: 'bold', cursor: 'pointer'}} onClick={toggleIsCreateUserView}>here</span> if you haven't yet joined the Battle Arena.
      </>
    )
  }

  return (
    <div>
      {isCreateUserView ? 'Join the Battle Arena!' : 'Warrior\'s Entrance'}
      <form onSubmit={handleUserFormSubmit}>
        <label>
          Name:
          <input type="text" onChange={handleOnChangeUsername}></input>
        </label>
        <label>
          Passcode:
          <input type="text" onChange={handleOnChangePassword}></input>
        </label>
        <input type="submit"></input>
      </form>
      {isCreateUserView ? <AlreadyUser /> : <CreateUser/>}
    </div>
  )
}


export default App;