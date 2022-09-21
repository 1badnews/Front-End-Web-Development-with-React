import React, {Component} from 'react'
import {Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle} from 'reactstrap';




class Dish extends Component {

    

    renderDish(name) {
        if (name != null) {
            return(
                

                
                <div className="col-md-5 col-sm-12 m-1">
                    <Card>
                        <CardImg width="100%" src={name.image} alt={name.name} />
                        <CardBody>
                            <CardTitle>{name.name}</CardTitle>
                            <CardText>{name.description}</CardText>
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
    renderComments(name) {
        if (name != null) {
            return(
                
            <div className="col-md-5 col-sm-12 m-1">
                <h3> Comments </h3>
                <p>{name.comments[0].comment}</p>
                <p>-- {name.comments[0].author} , {name.comments[0].date}</p>
                <p>{name.comments[1].comment}</p>
                <p>-- {name.comments[1].author} , {name.comments[1].date}</p>
                <p>{name.comments[2].comment}</p>
                <p>-- {name.comments[2].author} , {name.comments[2].date}</p>
                <p>{name.comments[3].comment}</p>
                <p>-- {name.comments[3].author} , {name.comments[3].date}</p>
                <p>{name.comments[4].comment}</p>
                <p>-- {name.comments[4].author} , {name.comments[4].date}</p>
            </div>
            
                
            );
        }
        else {
            return(
                <div></div>
            )
        }
    }


    render()
    {
        return (
    

                <div className="row">
                    {this.renderDish(this.props.name)}
                    {this.renderComments(this.props.name)}
                </div>



    
             );

}
}

export default Dish;