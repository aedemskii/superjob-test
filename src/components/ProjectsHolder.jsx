import React, { Component } from 'react';
import Project from './Project';

class ProjectsHolder extends Component {
    render() {
        let projects = this.props.projects;
        let projectsBodies = [],
            len = projects.length;
        for (let idx = 0; idx < len; idx ++) {
            let project = projects[idx];
            projectsBodies.push(
                <Project
                    key={"p_" + idx}
                    projectIdx={idx}
                    name={project.name}
                    isOpened={project.isOpened}
                    isActive={project.isActive}
                    vacancies={project.vacancies}
                    switchToAddMode={this.props.switchToAddMode}
                    toggleOpenProject={this.props.toggleOpenProject}
                    toggleActiveObject={this.props.toggleActiveObject}
                    deleteObject={this.props.deleteObject}
                    />
            );
        }
        return (
            <div className="projects-holder">
                {projectsBodies}
            </div>
        );
    }
}

export default ProjectsHolder;
