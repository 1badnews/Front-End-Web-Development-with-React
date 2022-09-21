import React, {Component} from 'react'
import {Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle} from 'reactstrap';
import Dish from './DishdetailComponent';

/*reikia pakeisti i functional componenta
*/

class Menu extends Component {

    constructor(props) {
        super(props);
        this.state = {
            selectedDish: null
        };
    }

    componentDidMount()
    {
        console.log('componentDidMount veikia')
    }

    onDishSelect(dish)
    {
        this.setState({selectedDish: dish});
        console.log(dish.comments[1].author)
    }

    renderDish(dish) {
        if (dish != null) {
            return(
                

                
                <div className="col-md-5 col-sm-12 m-1">
                    <Card>
                        <CardImg width="100%" src={dish.image} alt={dish.name} />
                        <CardBody>
                            <CardTitle>{dish.name}</CardTitle>
                            <CardText>{dish.description}</CardText>
                        </CardBody>
                    </Card>
                </div>
                
            
                
            );
        }
        else {
            return(
                <div></div>
            )
        }
    }
    renderComments(dish) {
        if (dish != null) {
            return(
                
            <div className="col-md-5 col-sm-12 m-1">
                <h3> Comments </h3>
                <p>{dish.comments[0].comment}</p>
                <p>-- {dish.comments[0].author} , {dish.comments[0].date}</p>
                <p>{dish.comments[1].comment}</p>
                <p>-- {dish.comments[1].author} , {dish.comments[1].date}</p>
                <p>{dish.comments[2].comment}</p>
                <p>-- {dish.comments[2].author} , {dish.comments[2].date}</p>
                <p>{dish.comments[3].comment}</p>
                <p>-- {dish.comments[3].author} , {dish.comments[3].date}</p>
                <p>{dish.comments[4].comment}</p>
                <p>-- {dish.comments[4].author} , {dish.comments[4].date}</p>
            </div>
            
                
            );
        }
        else {
            return(
                <div></div>
            )
        }
    }

    render(){

    const menu = this.props.dishes.map((dish) => {
        return (
            <div key={dish.id} className="col-12 col-md-5 m-1">
                <Card onClick={() => this.onDishSelect(dish)}>
                        <CardImg width="100%" src={dish.image} alt={dish.name}/>
                    <CardImgOverlay>
                        <CardTitle>{dish.name}</CardTitle>
                </CardImgOverlay>
                </Card>
            </div>
        );
    });

        return (
            <div className="container">
                <div className="row">
                    {menu}
                </div>
                <Dish name={this.state.selectedDish}/>
            </div>
        );
    }
}
export default Menu;