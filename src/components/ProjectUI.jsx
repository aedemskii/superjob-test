import React, {Component} from 'react';
import oneFiewMany from "./oneFiewMany";
import done from "./imgs/done.svg";
import AppButton from "./AppButton";


class ProjectUI extends Component {
    constructor(props) {
        super(props);
        this.state = {
            vacanciesNumber: props.vacanciesNumber,
            info: oneFiewMany(props.vacanciesNumber, ["вакансия", "вакансии", "вакансий"]),
            opened: props.opened,
            active: props.active
        }
    }

    render() {
        function doneOrButton(projectIsActive) {
            if (projectIsActive) {
                 return (<AppButton text={"ДОБАВИТЬ ВАКАНСИЮ"} className={"color-green"} />);
            } else {
                 return (
                    <div className="done">
                        <img src={done} />
                        <span>Проект закрыт, сотрудники наняты</span>
                    </div>
                );
            }
        }
        return(
            <div className="project-ui">
                <div className="block">
                    <div className="vacancies-number">
                        <span>{this.state.info}</span>
                    </div>
                    {doneOrButton(this.state.active)}

                </div>
                <div className="block">
                    <AppButton text={"ЗАКРЫТЬ ПРОЕКТ"} className={""} />
                    <AppButton text={"УДАЛИТЬ"} className={""} />
                </div>
            </div>
        );
    }
}

export default ProjectUI;
