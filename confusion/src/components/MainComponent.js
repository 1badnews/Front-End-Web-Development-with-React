import React, { useEffect, useState } from 'react';
import Menu from './MenuComponent';
import Contact from './ContactComponent';
import Dish from './DishdetailComponent';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import DishDetail from './DishdetailComponent';
import Home from './HomeComponent';
import About from './AboutComponent';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';
import {connect} from 'react-redux';
import {fetchComments, fetchDishes, fetchPromos, postComment} from '../redux/ActionCreator'
import {actions} from 'react-redux-form';
import {TransitionGroup, CSSTransition} from 'react-transition-group';

const mapStateToProps = state => 
{
  return{
    dishes:state.dishes,
    comments:state.comments,
    promotions:state.promotions,
    leaders:state.leaders
  }
}

const mapDispatchToProps = (dispatch) => ({
  
  postComment: (dishId, rating, author, comment) => dispatch(postComment(dishId, rating, author, comment)),
  fetchDishes: () => {dispatch(fetchDishes())},
  fetchPromos: () => {dispatch(fetchPromos())},
  fetchComments: () => {dispatch(fetchComments())},
  resetFeedbackForm: () => {dispatch(actions.reset('feedback'))}
});

const Main = (props) => {
  //const [dishes, setDished] = useState(DISHES);
  //const [comments, setComments] = useState(COMMENTS);
  //const [leaders, setLeaders] = useState(LEADERS);
  //const [promotions, setPromotions] = useState(PROMOTIONS);


  // The function below serves as an example on how to update dishes state
  // const updateDished = (newDishes) => {
  //   setDished(newDishes);
  // }
  useEffect(() => {
    props.fetchDishes();
    props.fetchComments();
    props.fetchPromos();
  },[]);

const HomePage= () => {
  return(
    <Home dish={props.dishes.dishes.filter((dish) => dish.featured)[0]}
    dishesLoading={props.dishes.isLoading}
    dishesErrMess={props.dishes.errMess}
    promotion={props.promotions.promotions.filter((promo) => promo.featured)[0]}
    promosLoading={props.promotions.isLoading}
    promosErrMess={props.promotions.errMess}
    leader={props.leaders.filter((lead) => lead.featured)[0]}
    />
  )
}

const DishWithId = ({match}) =>
{
  console.log(match.params)
  return(
    <Dish dish={props.dishes.dishes.filter((dish) => dish.id ===parseInt(match.params.dishId, 10))[0]}
    isLoading={props.dishes.isLoading}
    errMess={props.dishes.errMess}
    comments={props.comments.comments.filter((comment) => comment.dishId ===parseInt(match.params.dishId, 10))}
    commentsErrMess={props.comments.errMess}
    postComment={props.postComment}
    
    />
  );
}
 
  return (
    <div>
      <Header/>
      <TransitionGroup>
        <CSSTransition key={props.location.key} classNames="page" timeout={300}>
          <Switch>
            <Route path="/home" component={HomePage}/>
            <Route exact path="/menu" component={() => <Menu dishes={props.dishes} />} />
            <Route path="/menu/:dishId" component={DishWithId} />
            <Route exact path="/contactus" component={() =><Contact resetFeedbackForm={props.resetFeedbackForm}/>} />
            <Route exact path="/aboutus" component={() => <About leaders={props.leaders}/>}/>
            <Redirect to="/home" />
          </Switch>
        </CSSTransition>
      </TransitionGroup>
      <Footer/>
    </div>
  );
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Main));
