import React, { Component } from 'react';
import Person from './Person';

const Persons = function(props) {
    return ( props.names.map((loop,index) => {
        return <Person index={index} name={loop} onClick={() => props.onClick(index)} ></Person>
    }))
       
}

export default Persons