import React, {Component} from "react"


class Rzut extends Component{
    constructor(){
        super()
        this.state = {
            random: 0
        }
        this.handleClick = this.handleClick.bind(this)
    }


    handleClick(event) {
        event.preventDefault()
        const min = 1;
        const max = 6;
        const random = Math.floor((Math.random() * max) + 1);
        this.setState({ random });
      }


    render(){
        return(
            <div className="rzut">
                <form onClick={this.handleClick}>
                <button>LOSUJ</button>
                </form>
                <h1>{this.state.random}</h1>
            </div>
        )
    }






}

export default Rzut