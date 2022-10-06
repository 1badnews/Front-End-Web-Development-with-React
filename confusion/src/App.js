import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Main from './components/MainComponent'
import {BrowserRouter} from 'react-router-dom'


function App(){



  // The function below serves as an example on how to update dishes state
  // const updateDished = (newDishes) => {
  //   setDished(newDishes);
  // }

  return (
    <BrowserRouter>
    <div>
      <Main/>
    </div>
    </BrowserRouter>
  );
}

export default App;
