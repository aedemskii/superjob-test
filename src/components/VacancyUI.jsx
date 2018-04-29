import React, { Component } from 'react';
import AppButton from "./AppButton";
import VacancyStatus from "./VacancyStatus";

class VacancyUI extends Component {
    constructor(props) {
        super(props);
        this.state = {
            active: props.active
        }
    }
    render() {
        return(
            <div className="vacancy-ui">
                <div className="block">
                    <VacancyStatus opened={this.state.active}/>
                </div>
                <div className="block">
                    <AppButton text={"ЗАКРЫТЬ ВАКАНСИЮ"} className={""} />
                    <AppButton text={"УДАЛИТЬ"} className={""} />
                </div>
            </div>
        );
    }
}

export default VacancyUI;
