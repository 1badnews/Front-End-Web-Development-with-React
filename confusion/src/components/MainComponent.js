import React, { useState } from 'react';
import Menu from './MenuComponent';
import { DISHES } from '../shared/dishes';
import { COMMENTS } from '../shared/comments';
import { LEADERS } from '../shared/leaders';
import { PROMOTIONS } from '../shared/promotions';
import Contact from './ContactComponent';
import Dish from './DishdetailComponent';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import DishDetail from './DishdetailComponent';
import Home from './HomeComponent';
import { Switch, Route, Redirect } from 'react-router-dom';


const Main = () => {
  const [dishes, setDished] = useState(DISHES);
  const [comments, setComments] = useState(COMMENTS);
  const [leaders, setLeaders] = useState(LEADERS);
  const [promotions, setPromotions] = useState(PROMOTIONS);


  // The function below serves as an example on how to update dishes state
  // const updateDished = (newDishes) => {
  //   setDished(newDishes);
  // }
const HomePage= () => {
  return(
    <Home dish={dishes.filter((dish) => dish.featured)[0]}
    promotion={promotions.filter((promo) => promo.featured)[0]}
    leader={leaders.filter((lead) => lead.featured)[0]}
    />
  )
}
 
  return (
    <div>
      <Header/>
      <Switch>
        <Route path="/home" component={HomePage}/>
        <Route exact path="/menu" component={() => <Menu dishes={dishes} />} />
        <Route exact path="/contactus" component={Contact}/>
        <Redirect to="/home" />
      </Switch>
      <Footer/>
    </div>
  );
}

export default Main;
