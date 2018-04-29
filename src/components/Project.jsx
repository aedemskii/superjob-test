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
            vacancies: props.vacancies || []
        };
    }
    render() {
        return (
            <div className="project">
                <ProjectHead
                    name={this.state.name}
                    opened={this.state.opened}
                    active={this.state.active}
                    vacanciesNumber={this.state.vacancies.length}
                />
                <ProjectVacanciesHolder vacancies={this.state.vacancies} />
            </div>
        );
    }
}

export default Project;
