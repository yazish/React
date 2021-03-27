import React, { Component } from 'react';
import Person from "../src/Components/Person.js"
import './App.css';



class App extends Component {
    state = {
        name : ["Armin" , "Yazish" , "Navroz"]
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

    render() {
        return (
            <div>
                <Person name={this.state.name[0]}/>
                <button onClick={this.switchbuttonHandler}> button</button>
            </div>
            
        )
    }
}

export default App;


