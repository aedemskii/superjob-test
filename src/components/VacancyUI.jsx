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
        let buttonData = {};
        if (this.state.active) {
            buttonData.text = "ЗАКРЫТЬ ВАКАНСИЮ";
        } else {
            buttonData.text = "ОТКРЫТЬ ВАКАНСИЮ";
            buttonData.className = "color-green";
        }
        return(
            <div className="vacancy-ui">
                <div className="block">
                    <VacancyStatus active={this.state.active}/>
                </div>
                <div className="block">
                    <AppButton text={buttonData.text} className={buttonData.className}/>
                    <AppButton text={"УДАЛИТЬ"} />
                </div>
            </div>
        );
    }
}

export default VacancyUI;
