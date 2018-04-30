import React, { Component } from 'react';
import VacancyUI from "./VacancyUI";

class Vacancy extends Component {
    render() {
        return (
            <div className="vacancy">
                <div className={"vacancy-name" + (this.props.isActive ? "" : " grey")}>
                    <span>{this.props.name}</span>
                </div>
                <VacancyUI
                    vacancyIdx={this.props.vacancyIdx}
                    projectIdx={this.props.projectIdx}
                    isActive={this.props.isActive}
                    toggleActiveObject={this.props.toggleActiveObject}
                    deleteObject={this.props.deleteObject}
                    />
            </div>
        );
    }
}

export default Vacancy;
