import React, { useState } from 'react';
import Menu from './MenuComponent';
import { DISHES } from '../shared/dishes';
import Dish from './DishdetailComponent';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import DishDetail from './DishdetailComponent';
import Home from './HomeComponent';
import { Switch, Route, Redirect } from 'react-router-dom';

const Main = () => {
  const [dishes, setDished] = useState(DISHES);


  // The function below serves as an example on how to update dishes state
  // const updateDished = (newDishes) => {
  //   setDished(newDishes);
  // }
const HomePage= () => {
  return(
    <Home/>
  )
}
 
  return (
    <div>
      <Header/>
      <Switch>
        <Route path="/home" component={HomePage}/>
        <Route exact path="/menu" component={() => <Menu dishes={dishes} />} />
        <Redirect to="/home" />
      </Switch>
      <Footer/>
    </div>
  );
}

export default Main;
