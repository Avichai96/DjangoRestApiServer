import React from 'react';
import { useState } from 'react';
import './App.css';

import StartBar from './components/startbar.jsx'
import UserAndContacts from './components/userandcontacts.jsx'

function App() {

  const [showUsers, setShowUsers] = useState(false)
  const onShowUsers = ()=>{
    setShowUsers(!showUsers)
  }

  return (
    <div className="App">
      <StartBar onShowUsers={onShowUsers}/>
      <UserAndContacts show={showUsers} />
    </div>
  );
}

export default App;
