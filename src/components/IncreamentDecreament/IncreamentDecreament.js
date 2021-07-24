import React, { Component } from "react";
import './IncreamentDecreament.css';
class IncreamentDecreament extends Component {
    constructor(props) {
        super(props);
        this.state = {
            myNumber: 0
        }
        this.setIncreamentHandler = this.setIncreamentHandler.bind(this);
        this.setDecreamentHandler = this.setDecreamentHandler.bind(this);
    }

    setIncreamentHandler() {
        this.setState({ myNumber: this.state.myNumber + 1 })
        document.getElementById('num').style.color = "green";
    }

    setDecreamentHandler() {
        if (this.state.myNumber <= 0) {
            return;
        }
        this.setState({ myNumber: this.state.myNumber - 1 })
        document.getElementById('num').style.color = "red";
    }

    render() {
        return (
            <div className='Increament'>
                <h3 id="num">{this.state.myNumber}</h3>
                <div className='flex'>
                    <button
                        onClick={this.setIncreamentHandler}
                        className='Button'>INCREAMENT</button>
                    <button
                        onClick={this.setDecreamentHandler}
                        className='Button'>Decreament</button>
                </div>
            </div>
        );
    }
}
export default IncreamentDecreament;