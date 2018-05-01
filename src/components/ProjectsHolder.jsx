import React, { Component } from 'react';
import Project from './Project';
import projectsFilter from './projectsFilter';

class ProjectsHolder extends Component {
    render() {
        let projects = JSON.parse(JSON.stringify(this.props.projects));

        let filter = this.props.searchFilter;

        if (filter.name.length || filter.activeOnly) {
            projects = projectsFilter(projects, filter);
        }

        let projectsBodies = [],
            len = projects.length;
        for ( let idx = 0; idx < len; idx++ ) {
            let project = projects[idx];
            if ( project === null ) continue;
            projectsBodies.push(
                <Project
                    key={"p_" + project.name + " " + idx}
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
