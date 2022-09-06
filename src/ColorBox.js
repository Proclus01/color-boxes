import React, { Component } from 'react';

class ColorBox extends Component {

    render() {
        return (
            <div style={{
                backgroundColor: `${this.props.color}`,
                width: "125px",
                height: "125px",
                display: "flex"
            }}>
                
            </div>
        );
    }
}

export default ColorBox;