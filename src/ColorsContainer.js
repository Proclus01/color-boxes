import React, { Component } from 'react';
import ColorBox from './ColorBox.js';

class ColorsContainer extends Component {
    constructor(props) {
        super(props);

        this.handleClick = this.handleClick.bind(this);

        this.state = {
            color1: this.makeRGB(),
            color2: this.makeRGB(),
            color3: this.makeRGB(),
            color4: this.makeRGB(),
            color5: this.makeRGB(),
            color6: this.makeRGB(),
            color7: this.makeRGB(),
            color8: this.makeRGB(),
            color9: this.makeRGB(),
            color10: this.makeRGB(),
            color11: this.makeRGB(),
            color12: this.makeRGB(),
            color13: this.makeRGB(),
            color14: this.makeRGB(),
            color15: this.makeRGB(),
            color16: this.makeRGB(),
            color17: this.makeRGB(),
            color18: this.makeRGB()
        }
    }  

    rng() {
        return Math.floor(Math.random() * 256);
    }

    makeRGB() {
        const red = this.rng();
        const green = this.rng();
        const blue = this.rng();

        return `rgb(${red}, ${green}, ${blue})`;
    }

    handleClick(event) {
        return this.makeRGB();
    }

    render() {
        return (
            <div className="colorsContainer">
                {
                    Object.keys(this.state).map(
                        key => ( <ColorBox key={key} color={this.state[key]} /> )
                    )
                }
            </div>
        );
    }
}

export default ColorsContainer;