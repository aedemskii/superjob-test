import React, { Component } from 'react';
import Project from './Project';

class ProjectsHolder extends Component {
    render() {
        let projectsDatas = [
            {
                name: "SuperJob Frontend",
                vacanciesDatas: [
                    {
                        name: "Frontend Developer",
                        active: true
                    },
                    {
                        name: "Backend Developer",
                        active: false
                    }
                ],
                active: true,
                opened: true
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
                    vacanciesDatas={project.vacanciesDatas}
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
