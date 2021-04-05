import React, { Component } from 'react';
import Person from "../src/Components/Person.js"
import 'bootstrap/dist/css/bootstrap.min.css';
import Radium from "radium";
import styled from "styled-components"

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

    render() {

        let style = {
            backgroundColor : "blue"
        }

        if (this.state.isShown === true) {
            style.backgroundColor = "red"
        }


        

        return (
                <div>
                    {this.state.name.map((name , index) => {
                        return <Person name={name} onClick={() => {this.deleteNameHandler(index)}}></Person>
                    })}
                    <button onClick={this.toggleHandler}  className='btn btn-primary' style={{':hover' : {
                        color : 'red'
                    }}} > button </button>
                </div>
            
        )
    }
}

export default Radium(App);



// comment from the new machine