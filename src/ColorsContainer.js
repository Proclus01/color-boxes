import React, { Component } from 'react';
import ColorBox from './ColorBox.js';
import './ColorsContainer.css';

class ColorsContainer extends Component {

    static defaultProps = {
        numBoxes: 18,
        allColors: ['purple', 'magenta', 'violet', 'pink']
    }

    render() {
        const boxes = Array.from({length: this.props.numBoxes}).map(
            () => <ColorBox allColors={this.props.allColors} />
        );

        return (
            <div className="colorsContainer">
                {boxes}
            </div>
        );
    }
}

export default ColorsContainer;