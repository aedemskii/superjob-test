import React, { Component } from 'react';
import offNormal from './imgs/off-normal.svg';
import offHovered from './imgs/off-hovered.svg';
import onNormal from './imgs/on-normal.svg';
class AppCheckbox extends Component {

    checkboxOnClick = (e) => {
        let checkbox = e.currentTarget;
        checkbox.classList.toggle("on");
        this.props.setSearchFilter();
    }

    render() {
        return (
            <div className="add-checkbox">
                <div
                    className={"checkbox" + ( this.props.activeOnly ? " on" : "" )}
                    onMouseDown={this.checkboxOnClick}
                    >
                    <img src={onNormal}   alt="" className="on-normal" />
                    <img src={offHovered} alt="" className="off-hovered" />
                    <img src={offNormal}  alt="" className="off-normal" />
                </div>
                <span>Только открытые</span>
            </div>
        );
    }
}

export default AppCheckbox;
