import React, { Component } from 'react';
import './styles/Project.scss';
import ProjectHead from './ProjectHead';
import ProjectVacanciesHolder from './ProjectVacanciesHolder';

class Project extends Component {
    constructor(props){
        super(props);
        this.state = {
            name: props.name || "Безымянный проект",
            opened: props.opened || false,
            active: props.active || false,
            vacanciesDatas: props.vacanciesDatas || []
        };
    }
    render() {
        return (
            <div className={"project" + (this.state.opened ? " opened" : "")}>
                <ProjectHead
                    name={this.state.name}
                    opened={this.state.opened}
                    active={this.state.active}
                    vacanciesNumber={this.state.vacanciesDatas.length}
                />
                <ProjectVacanciesHolder vacanciesDatas={this.state.vacanciesDatas} />
            </div>
        );
    }
}

export default Project;
