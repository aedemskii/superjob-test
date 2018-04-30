import React, { Component } from 'react';
import offNormal from './imgs/off-normal.svg';
import offHovered from './imgs/off-hovered.svg';
import onNormal from './imgs/on-normal.svg';
class AppCheckbox extends Component {

    render() {
        return (
            <div className="add-checkbox">
                <div className="checkbox off">
                    <img src={onNormal}   alt="O" className="on-normal" />
                    <img src={offHovered} alt="0" className="off-hovered" />
                    <img src={offNormal}  alt="1" className="off-normal" />
                </div>
                <span>Только открытые</span>
            </div>
        );
    }
}

export default AppCheckbox;
