import React, {Component} from 'react';
import oneFiewMany from "./oneFiewMany";
import done from "./imgs/done.svg";
import AppButton from "./AppButton";


class ProjectUI extends Component {

    deleteProject = () => {
        this.props.deleteObject(this.props.projectIdx);
    }

    toggleActiveProject = () => {
        this.props.toggleActiveObject(this.props.projectIdx);
    }

    addVacancy = () => {
        this.props.switchToAddMode(this.props.projectIdx);
    }

    render() {
        let doneOrAddButton, activateDisactivate;
        if (this.props.isActive) {
             doneOrAddButton = (
                 <AppButton
                    text={"ДОБАВИТЬ ВАКАНСИЮ"}
                    className={"color-green"}
                    onClick={this.addVacancy}
                    />
             );
             activateDisactivate = (
                 <AppButton
                    text={"ЗАКРЫТЬ ПРОЕКТ"}
                    onClick={this.toggleActiveProject}
                    />
             );
        } else {
             doneOrAddButton = (
                <div className="done">
                    <img alt="" src={done} />
                    <span>Проект закрыт, сотрудники наняты</span>
                </div>
            );
            activateDisactivate = (
                <AppButton
                    text={"ОТКРЫТЬ ПРОЕКТ"}
                    className={"color-green"}
                    onClick={this.toggleActiveProject}
                    />
            );
        }
        let info = oneFiewMany(this.props.openedVacanciesNumber, ["вакансия", "вакансии", "вакансий"])
        return(
            <div className="project-ui">
                <div className="block">
                    <div className="vacancies-number">
                        <span>{info}</span>
                    </div>
                    {doneOrAddButton}

                </div>
                <div className="block">
                    {activateDisactivate}
                    <AppButton
                        text={"УДАЛИТЬ"}
                        onClick={this.deleteProject}
                        />
                </div>
            </div>
        );
    }
}

export default ProjectUI;
