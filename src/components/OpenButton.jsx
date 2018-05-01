import React, { Component } from 'react';
import trNormal from './imgs/tr-normal.svg';
import trHovered from './imgs/tr-hovered.svg';

class OpenButton extends Component {

    render() {
        let OpenButton = true;
        if (this.props.vacanciesNumber) {
            OpenButton = (
                <div
                    className={"open-button" + ( this.props.isOpened ? " opened" : "" )}
                    onMouseDown={this.props.toggleOpenProject}
                    >
                    <img src={trNormal} alt="" className="tr-normal" />
                    <img src={trHovered} alt="" className="tr-hovered" />
                </div>
            );
        }
        return ( OpenButton );
    }
}

export default OpenButton;
