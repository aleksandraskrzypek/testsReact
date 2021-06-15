import React, { Component } from 'react';
import Result from './Result';
import Buttons from "./Buttons";

class App extends Component {
  constructor(){
    super();

    this.state = {
        result: ""
    }
}

onClick = button => {

    if(button === "="){
        this.calculate()
    }

    else if(button === "clear"){
        this.reset()
    }
    else {
        this.setState({
            result: this.state.result + button
        })
    }
};


calculate = () => {
    try {
        this.setState({
            // eslint-disable-next-line
            result: (eval(this.state.result) || "" ) + ""
        })
    } catch (e) {
        this.setState({
            result: "error"
        })

    }
};

reset = () => {
    this.setState({
        result: ""
    })
};

    render() {
        return (
            <div>
                <div className="calculator-body">
                    <Result result={this.state.result}/>
                    <Buttons onClick={this.onClick}/>
                </div>
            </div>
        );
    }
}

export default App;
