import React from 'react';
import './App.css';

import Login from './components/Login/Login'
import { useStateValue } from './stateProvider';
import { auth } from 'firebase';
import Home from './Home';


function App() {
  const  [{user}, dispatch] = useStateValue();
 
  if(!user) return <Login />

  return (
    <div className="app"> 
      <Home />
    </div>
  );
}


export default App;
