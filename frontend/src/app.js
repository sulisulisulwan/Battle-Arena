import React from 'react';
import { useState } from 'react';
import axios from 'axios';

const App = () => {
  const [warrior, setWarrior] = useState(null);
  const [username, setUsername] = useState(null);
  const [password, setPassword] = useState(null);

  const handleOnChangeUsername = (e) => {
    setUsername(e.target.value);
  }

  const handleOnChangePassword = (e) => {
    setPassword(e.target.value);
  }

  const handleSubmitForm= (e) => {
    e.preventDefault()
    let body = {
      username: username,
      password: password
    }
    axios.post('/getWarrior', body)
      .then(result => {
        let warriorData = result.data;
        setWarrior(warriorData);
      })
      .catch(err => {
        console.error(err)
      })
  }

  return (
    <div>
      Warrior's Entrance
      <form onSubmit={handleSubmitForm}>
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

    </div>
  )
}


export default App;