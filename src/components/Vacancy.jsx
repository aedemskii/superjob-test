import React, { Component } from 'react';
import VacancyUI from "./VacancyUI";

class Vacancy extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: props.name,
            active: props.active
        }
    }
    render() {
        return (
            <div className="vacancy">
                <div className="vacancy-name">
                    <span>{this.state.name}</span>
                </div>
                <VacancyUI active={this.state.active} />
            </div>
        );
    }
}

export default Vacancy;
