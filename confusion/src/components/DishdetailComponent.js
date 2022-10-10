import React from 'react'
import {Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle, Breadcrumb, BreadcrumbItem} from 'reactstrap';
import {Link} from 'react-router-dom';






    

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
            const dishcomments = name.map((comment) => {
                return (
                    <div key={comment.id}>
                        <p>{comment.comment}</p>
                        <p>-- {comment.author} , {new Intl.DateTimeFormat('en-US', {year: 'numeric', month: 'short', day:'2-digit'}).format(new Date(Date.parse(comment.date)))}</p>
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
                        <Breadcrumb>
                        <BreadcrumbItem><Link to='/menu'>Menu</Link></BreadcrumbItem>
                        <BreadcrumbItem active>{props.dish.name}</BreadcrumbItem>
                        </Breadcrumb>
                        <div className="col-12">
                            <h3>{props.dish.name}</h3>
                            <hr/>
                        </div>
                    </div>
                    <div className="row">
                        <RenderDish name={props.dish}/>
                        <RenderComments name={props.comments}/>
                        
                    </div>
                </div>


    
             );

}


export default Dish;