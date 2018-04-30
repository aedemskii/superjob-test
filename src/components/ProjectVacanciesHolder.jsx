import React, { Component } from 'react';
import Vacancy from './Vacancy';

class ProjectVacanciesHolder extends Component {
    render () {
        if (!this.props.toRender) return true;
        let vacancies = this.props.vacancies;
        let vacanciesBodies = [], len = vacancies.length;
        for (let idx = 0; idx < len; idx++) {
            let vacancy = vacancies[idx];
            vacanciesBodies.push(
                <Vacancy
                    key={"v_" + vacancy.name + " " +  idx}
                    vacancyIdx={idx}
                    projectIdx={this.props.projectIdx}
                    name={vacancy.name}
                    isActive={vacancy.isActive}
                    toggleActiveObject={this.props.toggleActiveObject}
                    deleteObject={this.props.deleteObject}
                />
            )
        }
        return (
            <div className="project-vacancies-holder">
                {vacanciesBodies}
            </div>
        );
    }
}

export default ProjectVacanciesHolder;
