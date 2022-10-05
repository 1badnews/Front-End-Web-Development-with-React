import React from 'react'
import {Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle} from 'reactstrap';







    

    function RenderDish({name}) {
        if (name != null) {
            return(
                

                
                    <div className="col-12 col-md-5 m-1">
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
    function RenderComments({name}) {
        if (name != null) {
            const dishcomments = name.comments.map((comments) => {
                return (
                    <div key={comments.id}>
                        <p>{comments.comment}</p>
                        <p>-- {comments.author} , {new Intl.DateTimeFormat('en-US', {year: 'numeric', month: 'short', day:'2-digit'}).format(new Date(Date.parse(comments.date)))}</p>
                    </div>
                );
                
            });
            return(
                
            <div className="col-md-5 col-sm-12 m-1">
            <h3> Comments </h3>
              {dishcomments}
            </div>
            
            );
        }
        else {
            return(
                <div></div>
            )
        }
    }


    const Dish = (props) =>
    {
        return (
    
                <div className="container">
                <div className="row">
                    <RenderDish name={props.name}/>
                    <RenderComments name={props.name}/>
                </div>
                </div>


    
             );

}


export default Dish;