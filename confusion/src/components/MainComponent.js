import React, { useState } from 'react';
import Menu from './MenuComponent';
import { DISHES } from '../shared/dishes';
import Dish from './DishdetailComponent';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import DishDetail from './DishdetailComponent';

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
      <Header/>
      <Menu dishes={dishes} 
        onClick={(dishId) => updateSelectedDish(dishId)}/>
      <Dish name={dishes.filter((dish) => dish.id === selectedDish )[0]} />
      <Footer/>
    </div>
  );
}

export default Main;
