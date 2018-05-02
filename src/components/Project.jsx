import React, { Component } from 'react';
import './styles/Project.scss';
import ProjectHead from './ProjectHead';
import ProjectVacanciesHolder from './ProjectVacanciesHolder';

class Project extends Component {
    render() {
        let openedVacanciesNumber = (
            this.props.vacancies.filter((vac) => { return vac.isActive; })
        ).length
        return (
            <div className={"project" + (this.props.isOpened ? " opened" : "")}>
                <ProjectHead
                    name={this.props.name}
                    isOpened={this.props.isOpened}
                    isActive={this.props.isActive}
                    vacanciesNumber={this.props.vacancies.length}
                    openedVacanciesNumber={openedVacanciesNumber}
                    switchToAddMode={this.props.switchToAddMode}
                    toggleOpenProject={this.props.toggleOpenProject}
                    toggleActiveObject={this.props.toggleActiveObject}
                    deleteObject={this.props.deleteObject}
                    projectIdx={this.props.projectIdx}
                />
                <ProjectVacanciesHolder
                    vacancies={this.props.vacancies}
                    toRender={this.props.isOpened}
                    switchToAddMode={this.props.switchToAddMode}
                    toggleActiveObject={this.props.toggleActiveObject}
                    deleteObject={this.props.deleteObject}
                    projectIdx={this.props.projectIdx}
                    />
            </div>
        );
    }
}

export default Project;
