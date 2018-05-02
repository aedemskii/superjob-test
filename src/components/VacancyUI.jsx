import React, { Component } from 'react';
import AppButton from "./AppButton";
import VacancyStatus from "./VacancyStatus";

class VacancyUI extends Component {

    deleteVacancy = () => {
        this.props.deleteObject(this.props.projectIdx, this.props.vacancyIdx);
    }

    toggleActiveVacancy = () => {
        this.props.toggleActiveObject(this.props.projectIdx, this.props.vacancyIdx);
    }

    render() {
        let buttonData = {};
        if (this.props.isActive) {
            buttonData.text = "ЗАКРЫТЬ ВАКАНСИЮ";
        } else {
            buttonData.text = "ОТКРЫТЬ ВАКАНСИЮ";
            buttonData.className = "color-green";
        }
        return(
            <div className="vacancy-ui">
                <div className="block">
                    <VacancyStatus isActive={this.props.isActive}/>
                </div>
                <div className="block">
                    <AppButton
                        text={buttonData.text}
                        className={buttonData.className}
                        onClick={this.toggleActiveVacancy}
                        />
                    <AppButton
                        text="УДАЛИТЬ"
                        className="color-red"
                        onClick={this.deleteVacancy}
                        />
                </div>
            </div>
        );
    }
}

export default VacancyUI;
