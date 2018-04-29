import React, { Component } from 'react';
import done from "./imgs/done.svg";
import search from "./imgs/search.svg";

class VacancyStatus extends Component {
    constructor(props) {
        super(props);
        this.state = {
            active: props.active
        }
    }
    render() {
        let vacancyStatus;
        if (this.state.active) {
            vacancyStatus = "Вакансия открыта, идет подбор кандидатов";
        } else {
            vacancyStatus = "Вакансия закрыта, сотрудник нанят";
        }
        let path, name;
        if (this.state.active) {
            path = search
            name = "search"
        } else {
            path = done
            name = "done"
        }
        return (
            <div className="vacancy-status">
                <img src={path} className={"img-" + name}/>
                <span>{vacancyStatus}</span>
            </div>
        );
    }
}

export default VacancyStatus;
