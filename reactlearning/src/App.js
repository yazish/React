import React, { Component } from 'react';
import Person from "../src/Components/Person.js"
import logo from './logo.svg';
import './App.css';



class App extends Component {
    state = {
        name : ["Armin" , "Yazish" , "Navroz"]
    }


    buttonHandler = () => {
        this.setState({
            name  : ["navroz"]
        })
    }

    render() {
        return (
            <div>
                <Person name={this.state.name[0]}/>
                <button onClick={this.buttonHandler}> button</button>
            </div>
            
        )
    }
}

export default App;


