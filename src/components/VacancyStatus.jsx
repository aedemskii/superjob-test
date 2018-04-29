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
        let vacancyStatus, path, name;
        if (this.state.active) {
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
                    <img src={path} className={"img-" + name}/>
                </div>
                <span className="vacancy-status">{vacancyStatus}</span>
            </div>
        );
    }
}

export default VacancyStatus;
