import React, { useState } from 'react';
import { Navbar, NavbarBrand } from 'reactstrap';
import Menu from './components/MenuComponent';
import { DISHES } from './shared/dishes';
import logo from './logo.svg';
import './App.css';

const App = () => {
  const [dishes, setDished] = useState(DISHES);

  // The function below serves as an example on how to update dishes state
  // const updateDished = (newDishes) => {
  //   setDished(newDishes);
  // }

  return (
    <div>
      <Navbar dark color="primary">
        <div className="container">
          <NavbarBrand href="/">Ristorante Con Fusion</NavbarBrand>
        </div>
      </Navbar>
      <Menu dishes={dishes} />
    </div>
  );
}

export default App;
