import React from 'react';
import Vacancy from './Vacancy';

function ProjectVacanciesHolder({vacanciesDatas}){
    let vacancies = [], len = vacanciesDatas.length;
    for (let idx = 0; idx < len; idx++) {
        let vacancy = vacanciesDatas[idx];
        vacancies.push(
            <Vacancy
                key={idx}
                name={vacancy.name}
                active={vacancy.active}
            />
        )
    }
    return (
        <div className="project-vacancies-holder">
            {vacancies}
        </div>
    );
}

export default ProjectVacanciesHolder;
