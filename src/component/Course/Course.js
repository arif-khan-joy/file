import React from 'react';
import { Button } from 'react-bootstrap';
import '../css/bootstrap.min.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import './Course.css'



const Course = (props) => {
    console.log(props)
    return (
        <div className="course">
            <div className="design">
               <img src={props.name.image} alt=""/>
            </div>
            <div className="button">
              <h4>{props.name.title}</h4>
              <h5>Price: {props.name.price}</h5>
              <Button onClick={()=>props.addHandler(props.name)} variant="primary"> <FontAwesomeIcon icon={faPlus} /> ENROLL NOW</Button>
            </div>
            
        </div>
    );
};




export default Course;