import React, { Component } from 'react';
import passMistakeToInput from './utils/passMistakeToInput';
import TextInput from './TextInput';
import AppButton from './AppButton';

class createVacancy extends Component {
    inputId = 'new_vacancy_name';

    clickHandle = () => {
        const input = document.getElementById(this.inputId);
        const name = input.value;
        const addMode = this.props.addMode
        let message;
        if (name.length === 0) {
            message = 'У вакансии должно быть название';
        } else {
            const condition = (_name) => { return _name.toUpperCase() === name.toUpperCase(); }
            let vacancies = this.props.projects[addMode].vacancies;

            if (vacancies.filter((vac) => { return condition(vac.name) }).length) {
                message = 'В этом проекте уже есть вакансия с таким названием';
            }
        }

        if (message) {
            passMistakeToInput(this.inputId, message);
        } else {
            document.removeEventListener('keydown', this.onKeyDown);
            this.props.createVacancy(name, this.props.addMode);
        }

    };

    onKeyDown = (e) => {
        const key = e.which || e.keyCode;
        if (key === 13) {
            this.clickHandle();
        } else if (key === 27) {
            document.removeEventListener('keydown', this.onKeyDown);
            this.props.quitFromModal();
        }
    };

    render() {
        if ( !(this.props.addMode + 1) ) return null;

        setTimeout(
            (function() {
                const input = document.getElementById(this.inputId);
                if (input) {
                    input.focus();
                    document.addEventListener('keydown', this.onKeyDown);
                }
            }).bind(this)
        , 0);

        return (
            <div className='modal-vacancy'>
                <div className='head'>
                    <span>Новая вакансия</span>
                </div>
                <div className='create-form'>
                    <TextInput id={this.inputId} placeholder='Название вакансии' />
                    <AppButton
                        value=''
                        text={'СОЗДАТЬ'}
                        className={'green'}
                        onClick={this.clickHandle}
                        />
                </div>
            </div>
        );
    }
}

export default createVacancy;
