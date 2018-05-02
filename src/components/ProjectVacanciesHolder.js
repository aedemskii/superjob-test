import React, { Component } from 'react';
import Vacancy from './Vacancy';

class ProjectVacanciesHolder extends Component {
    render () {
        if (!this.props.toRender) return null;
        const vacancies = this.props.vacancies;
        const vacanciesBodies = [];
        vacancies.forEach(
            (vacancy, idx) => {
                vacanciesBodies.push(
                    <Vacancy
                        key={'v_' + vacancy.name + ' ' +  idx}
                        vacancyIdx={idx}
                        projectIdx={this.props.projectIdx}
                        name={vacancy.name}
                        isActive={vacancy.isActive}
                        toggleActiveVacancy={this.props.toggleActiveVacancy}
                        deleteVacancy={this.props.deleteVacancy}
                    />
                )
            }
        );
        return (
            <div className='project-vacancies-holder'>
                {vacanciesBodies}
            </div>
        );
    }
}

export default ProjectVacanciesHolder;
