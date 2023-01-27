import React from 'react';
import { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Register from './components/Register'; 
import Login from './components/Login'; 
import Header from './components/Header'; 

function App() {
  const [currentForm, setCurrentForm] = useState('login');

  const toggleForm = (formName:any) => {
    setCurrentForm(formName);
  }

  return (

    <div className="App">
      <header>
        <Header/>
        
      </header>
      <main className="main">
        {
          currentForm === "login" ? <Login onFormSwitch={toggleForm}/> : <Register onFormSwitch={toggleForm}/>
        }
        
      </main>
      <footer>

      </footer>
      
    </div>
  );
}

export default App;
