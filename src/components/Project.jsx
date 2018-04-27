import React, { Component } from 'react';
import './styles/Project.css';
import ProjectHeader from './ProjectHeader';
import ProjectVacanciesHolder from './ProjectVacanciesHolder';

class Project extends Component {
    constructor(props){
        super(props);
        this.state = {
            opened: props.opened || false,
            expanded: props.expanded || false,
            vacancies: props.positions || []
        };
    }
    render() {
        return (
            <div className="project">
                <ProjectHeader />
                <ProjectVacanciesHolder />
            </div>
        );
    }
}

export default Project;
