import React, { Component } from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import Vacancy from './Vacancy';

class ProjectVacanciesHolder extends Component {
    render () {
        const vacancies = this.props.vacancies;
        const vacanciesBodies = [];
        if (this.props.toRender) {
            vacancies.forEach(
                (vacancy, idx) => {
                    vacanciesBodies.push(
                        <Vacancy
                            key={'v_' + vacancy.name.replace(/ /g, '_')}
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
        }
        return (
            <div className='project-vacancies-holder'>
                <ReactCSSTransitionGroup
                    transitionName="smooth"
                    transitionEnterTimeout={500}
                    transitionLeaveTimeout={300}
                    >
                    {vacanciesBodies}
                </ReactCSSTransitionGroup>
            </div>
        );
    }
}

export default ProjectVacanciesHolder;
