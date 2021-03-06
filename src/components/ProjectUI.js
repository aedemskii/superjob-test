import React, {Component} from 'react';
import oneFewMany from './utils/oneFewMany';
import done1 from './imgs/done@1x.png';
import done2 from './imgs/done@2x.png';
import done3 from './imgs/done@3x.png';
import AppButton from './AppButton';


class ProjectUI extends Component {

    deleteProject = () => {
        this.props.deleteProject(this.props.projectIdx);
    };

    toggleActiveProject = () => {
        this.props.toggleActiveProject(this.props.projectIdx);
    };

    addVacancy = () => {
        this.props.switchToAddMode(this.props.projectIdx);
    };

    render() {
        let doneOrAddButton, activateDisactivate;
        if (this.props.isActive) {
             doneOrAddButton = (
                 <AppButton
                    text={'ДОБАВИТЬ ВАКАНСИЮ'}
                    className={'color-green'}
                    onClick={this.addVacancy}
                    />
             );
             activateDisactivate = (
                 <AppButton
                    text='ЗАКРЫТЬ ПРОЕКТ'
                    onClick={this.toggleActiveProject}
                    />
             );
        } else {
             doneOrAddButton = (
                <div className='done'>
                    <img alt='' src={done1} srcSet={`${done2}, ${done3}`} />
                    <span>Проект закрыт, сотрудники наняты</span>
                </div>
            );
            activateDisactivate = (
                <AppButton
                    text='ОТКРЫТЬ ПРОЕКТ'
                    className='color-green'
                    onClick={this.toggleActiveProject}
                    />
            );
        }
        const info = oneFewMany(this.props.openedVacanciesNumber, ['вакансия', 'вакансии', 'вакансий']);
        return(
            <div className='project-ui'>
                <div className='block'>
                    <div className='vacancies-number'>
                        <span>{info}</span>
                    </div>
                    {doneOrAddButton}

                </div>
                <div className='block'>
                    {activateDisactivate}
                    <AppButton
                        text='УДАЛИТЬ'
                        onClick={this.deleteProject}
                        className='color-red'
                        />
                </div>
            </div>
        );
    }
}

export default ProjectUI;
