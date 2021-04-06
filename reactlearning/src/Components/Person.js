import React from 'react';
import styled from 'styled-components'
import Persons from './Persons';

const StylePara = styled.div`{color : green}`

function Person(props) {
    return (
        <StylePara onClick={props.onClick}>My name is {props.name}</StylePara>
    )
}

export default Person