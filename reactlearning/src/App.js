import React, { Component } from 'react';
import Person from "../src/Components/Person.js"
import './App.css';



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

    render() {

        return (
            <div>
                {this.state.isShown ? <Person name={this.state.name[0]}></Person> : null}
                <button onClick={this.toggleHandler}> button </button>
            </div>
            
        )
    }
}

export default App;


// comment from the new machine