import React, { Component } from 'react';
import done from "./imgs/done.svg";
import search from "./imgs/search.svg";

class VacancyStatus extends Component {
    render() {
        let vacancyStatus, path, name;
        if (this.props.isActive) {
            vacancyStatus = "Вакансия открыта, идет подбор кандидатов";
            path = search
            name = "search"
        } else {
            vacancyStatus = "Вакансия закрыта, сотрудник нанят";
            path = done
            name = "done"
        }
        return (
            <div className="vacancy-status">
                <div className="img-holder">
                    <img src={path} alt="" className={"img-" + name}/>
                </div>
                <span className="vacancy-status">{vacancyStatus}</span>
            </div>
        );
    }
}

export default VacancyStatus;
