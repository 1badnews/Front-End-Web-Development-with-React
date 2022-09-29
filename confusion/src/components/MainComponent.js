import React, { useState } from 'react';
import { Navbar, NavbarBrand } from 'reactstrap';
import Menu from './MenuComponent';
import { DISHES } from '../shared/dishes';
import Dish from './DishdetailComponent';

const Main = () => {
  const [dishes, setDished] = useState(DISHES);
  const [selectedDish, setselectedDish] = useState(null);

  // The function below serves as an example on how to update dishes state
  // const updateDished = (newDishes) => {
  //   setDished(newDishes);
  // }

  const updateSelectedDish=(dishId)=>{
    setselectedDish(dishId)
    console.log(selectedDish)
  }
  return (
    <div>
      <Navbar dark color="primary">
        <div className="container">
          <NavbarBrand href="/">Ristorante Con Fusion</NavbarBrand>
        </div>
      </Navbar>
      <Menu dishes={dishes} 
        onClick={(dishId) => updateSelectedDish(dishId)}/>
      <Dish name={dishes.filter((dish) => dish.id === selectedDish )[0]} />
    </div>
  );
}

export default Main;
