import React, { Component } from 'react';
import './ColorBox.css';

class ColorBox extends Component {
    static defaultProps = {
        allColors: ['purple', 'magenta', 'lilac', 'pink']
    }

    constructor(props) {
        super(props);
        this.state = { color: 'purple' };

        this.handleClick = this.handleClick.bind(this);
    }

    rng() {
        return Math.floor(Math.random() * 256);
    }

    handleClick(event) {
        
    }

    render() {
        return (
            <div 
                className="Box" 
                style={{backgroundColor: this.state.color}}
                onClick={this.handleClick}
            >
                
            </div>
        );
    }
}

export default ColorBox;