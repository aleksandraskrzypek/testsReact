import React, {Component} from 'react';

class Buttons extends Component {

    render() {
        return (

<div className="buttons">
    <button
        name="clear"
        onClick={e => this.props.onClick(e.target.name)}
        className="clear">
        CLAER
    </button>
    <button
        name="="
        onClick={e => this.props.onClick(e.target.name)}
        className="wynik">
        =
    </button>

    <br />

    <button 
        name="7"
        onClick={e => this.props.onClick(e.target.name)}
        className="numbers">
        7
    </button>
    <button 
        name="8"
        onClick={e => this.props.onClick(e.target.name)}
        className="numbers">
        8
    </button>
    <button 
        name="9"
        onClick={e => this.props.onClick(e.target.name)}
        className="numbers">
        9
    </button>
    <button
        name="/"
        onClick={e => this.props.onClick(e.target.name)}
        className="operatory">
        /
    </button>

    <br />

    <button 
        name="4"
        onClick={e => this.props.onClick(e.target.name)}
        className="numbers">
        4
    </button>
    <button 
        name="3"
        onClick={e => this.props.onClick(e.target.name)}
        className="numbers">
        5
    </button>
    <button 
        name="2"
        onClick={e => this.props.onClick(e.target.name)}
        className="numbers">
        6
    </button>
    <button
        name="*"
        onClick={e => this.props.onClick(e.target.name)}
        className="operatory">
        *
    </button>

        <br />

    <button 
        name="1"
        onClick={e => this.props.onClick(e.target.name)}
        className="numbers">
        1
    </button>
    <button 
        name="2"
        onClick={e => this.props.onClick(e.target.name)}
        className="numbers">
        2
    </button>
    <button 
        name="3"
        onClick={e => this.props.onClick(e.target.name)}
        className="numbers">
        3
    </button>
    <button
        name="-"
        onClick={e => this.props.onClick(e.target.name)}
        className="operatory">
        -
    </button>

        <br />

    <button
        name="0"
        onClick={e => this.props.onClick(e.target.name)}
        className="zero">
        0
    </button>
    <button
        name="+"
        onClick={e => this.props.onClick(e.target.name)}
        className="operatory">
        +
    </button>
    </div>

    )
}
}

export default Buttons;