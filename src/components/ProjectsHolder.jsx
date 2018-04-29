import React, { Component } from 'react';
import Project from './Project';

class ProjectsHolder extends Component {
    render() {
        let projectsDatas = [
            {
                name: "Название проекта",
                vacancies: [
                    {
                        name: "vacancy",
                        active: true
                    }
                ],
                active: false,
                opened: false

            }
        ];
        let projects = [],
            len = projectsDatas.length;
        for (let idx = 0; idx < len; idx ++) {
            let project = projectsDatas[idx];
            projects.push(
                <Project
                    key={idx}
                    name={project.name}
                    opened={project.opened}
                    active={project.active}
                    vacancies={project.vacancies}
                    />
            );
        }
        return (
            <div className="projects-holder">
                {projects}
            </div>
        );
    }
}

export default ProjectsHolder;
