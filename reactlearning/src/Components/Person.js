import React , {useEffect} from 'react';
import styled from 'styled-components'
import Persons from './Persons';

const StylePara = styled.div`{color : green}`

function Person(props) {

    useEffect(() => {alert("the component has been updated")})


    return (
        <StylePara onClick={props.onClick}>My name is {props.name}</StylePara>
    )
}

export default Person