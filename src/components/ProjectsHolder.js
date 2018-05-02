import React, { Component } from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import projectsFilter from './utils/projectsFilter';
import Project from './Project';

class ProjectsHolder extends Component {
    render() {
        let projects = JSON.parse(JSON.stringify(this.props.projects));

        const filter = this.props.searchFilter;

        if (filter.name.length || filter.activeOnly) {
            projects = projectsFilter(projects, filter);
        }

        const projectsBodies = [];

        projects.forEach(
            (project, idx) => {
                if ( project === null ) return;
                projectsBodies.push(
                    <Project
                        key={"p_" + project.name}
                        projectIdx={idx}
                        name={project.name}
                        isOpened={project.isOpened}
                        isActive={project.isActive}
                        vacancies={project.vacancies}
                        switchToAddMode={this.props.switchToAddMode}
                        toggleOpenProject={this.props.toggleOpenProject}
                        toggleActiveProject={this.props.toggleActiveProject}
                        toggleActiveVacancy={this.props.toggleActiveVacancy}
                        deleteProject={this.props.deleteProject}
                        deleteVacancy={this.props.deleteVacancy}
                        />
                );
            }
        );
        return (
            <div className="projects-holder">
                <ReactCSSTransitionGroup
                    transitionName="smooth"
                    transitionEnter={false}
                    transitionLeaveTimeout={800}
                    >
                    {projectsBodies}
                </ReactCSSTransitionGroup>
            </div>
        );
    }
}

export default ProjectsHolder;
