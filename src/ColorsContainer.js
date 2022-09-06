import React, { Component } from 'react';
import ColorBox from './ColorBox.js';

class ColorsContainer extends Component {

    render() {
        return (
            <div className="colorsContainer flexContainer">
                <ColorBox />
            </div>
        );
    }
}

export default ColorsContainer;