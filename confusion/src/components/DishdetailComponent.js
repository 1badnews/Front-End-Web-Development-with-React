import React, {useState} from 'react'
import {Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle, Breadcrumb, BreadcrumbItem, Button, Modal
, ModalHeader, ModalBody,
Form, FormGroup, Label, Col, Row} from 'reactstrap';
import {Link} from 'react-router-dom';
import {Control, LocalForm, Errors, Field} from 'react-redux-form';
import  {addComment} from '../redux/ActionCreator';
import {Loading} from './LoadingComponent';



    function CommentForm(props)
    {
        
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const required = (val) => val && val.length;
    const maxLength = (len) => (val) => !(val) || (val.length <= len);
    const minLength = (len) => (val) => (val) && (val.length >= len);
    
    function handleSubmit(values)
    {
    console.log(props.dishId, values.rating, values.name, values.desc);
    alert('Thank you for submitting!')
    props.addComment(props.dishId, values.rating, values.name, values.desc)
    setShow(false);
    console.log(props.comments)
    }
    
        return(
            <div>
            <Button outline color="secondary" onClick={handleShow}><i className="fa fa-pencil"></i> Submit Comment</Button>
            <Modal
                fade={false}
                isOpen={show}
                toggle={handleClose}>
                    <ModalHeader>Submit Comment</ModalHeader>
                    <ModalBody>
                    <LocalForm onSubmit={(values) => handleSubmit(values)}>
                            <FormGroup>
                                <Label htmlFor="rating">Rating</Label>
                                 <Control.select className="w-100 p-1" model=".rating" name="rating" classname="form-control">
                                    <option>5</option>
                                    <option>4</option>
                                    <option>3</option>
                                    <option>2</option>
                                    <option>1</option>
                                </Control.select>
                            </FormGroup>
                            <FormGroup>
                                <Label>Your Name</Label>
                                <Control.text className="w-100 p-1" model=".name" name="name" classname="form-control" validators=
                                {{required, minLength: minLength(2), maxLength: maxLength(15)}}></Control.text>
                                <Errors
                                    className="text-danger" model=".name" show="touched" messages={{
                                        required: 'Required ',
                                        minLength: 'Must be greater than 2 characters ',
                                        maxLength: 'Must be 15 characters or less '
                                    }}
                                />
                            </FormGroup>
                            <FormGroup>
                                <Label>Comment</Label>
                                <Control.textarea rows="6" className="w-100 " model=".desc" name="desc" classname="form-control"></Control.textarea>
                            </FormGroup>
                            <Button type="submit" value="submit" color="primary">Submit</Button>
                        </LocalForm>
                    </ModalBody>
                </Modal>
            </div>
        );
    }


    

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
    function RenderComments({name, addComment, dishId}) {
        
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
              <CommentForm dishId={dishId} addComment={addComment}/>
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
        if (props.isLoading) {
            return(
                <div className='container'>
                    <div className='row'>
                        <Loading/>
                    </div>
                </div>
            );
        }
        else if (props.errMess)
        {
            return(
                <div className='container'>
                    <div className='row'>
                        <h4>{props.errMess}</h4>
                    </div>
                </div>
            );
        }
        else return (
    
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
                        <RenderComments name={props.comments} 
                        addComment = {props.addComment}
                        dishId={props.dish.id}/>
                        
                        
                    </div>
                </div>


    
             );

}


export default Dish;


// toks jausmas nesirefreshina listas po addinimo blet