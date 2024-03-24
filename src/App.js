import React from 'react';
import ListOfInterns from './components/ListOfInterns';
import { InternData } from './components/InternData';
import './App.css';


function App(){


 


  return(
    <>
    
    <div className='App'>
      <h1 className='header'>INTERNS ASSIGNMENT SCORES</h1>
     
  
      <ListOfInterns data={InternData} />

    </div>

    </>


  )
}

export default App;