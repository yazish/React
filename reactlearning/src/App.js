import React, { Component } from 'react';
import Person from "../src/Components/Person.js"
import 'bootstrap/dist/css/bootstrap.min.css';
import Radium from "radium";
import styled from "styled-components"
import Persons from "./Components/Persons.js"

class App extends Component {
    state = {
        name : ["Armin" , "Yazish" , "Navroz"],
        isShown : true
    }


    switchbuttonHandler = () => {
        if (this.state.name[0] === "Armin" ) {
            this.setState({
                name  : ["navroz"]
            })
        } else {
            this.setState({
                name : ["Armin"]
            })
        }
    }

    toggleHandler = () => {
        
        if (this.state.isShown) {
            this.setState({
                isShown :false
            })
        } else { 
            this.setState({
                isShown : true
            })
        }
    }

    deleteNameHandler(index) {
        let names = this.state.name.slice();
        names.splice(index,1)
        console.log(names , index );
        this.setState({
            name : names
        })
    }

    componentWillUnmount() {
        alert("the component is going to be deleted !")
    }

    render() {

        let style = {
            backgroundColor : "blue"
        }

        if (this.state.isShown === true) {
            style.backgroundColor = "red"
        }


        

        return (
                <div>
                    <Persons names={this.state.name} onClick={this.deleteNameHandler.bind(this)}></Persons>

                    <button onClick={this.toggleHandler}  className='btn btn-primary' style={{color : 'red'}}  > button </button>
                </div>
            
        )
    }
}

export default App



// comment from the new machine