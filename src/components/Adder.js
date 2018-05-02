import React, { Component } from 'react';
import closeNormal from './imgs/close-icon-normal.svg';
import closeHovered from './imgs/close-icon-hovered.svg';
import closePressed from './imgs/close-icon-pressed.svg';
import passMistakeToInput from './utils/passMistakeToInput';
import TextInput from './TextInput';
import AppButton from './AppButton';

class Adder extends Component {
    inputId = 'new_object_name';
    clickHandle = () => {
        let input = document.getElementById(this.inputId);
        let name = input.value;
        let message, addMode = this.props.addMode;
        if (name.length === 0) {
            message = (addMode + 1) ?
                'У вакансии должно быть название'
            :
                'У проекта должно быть название';
        } else {
            let condition = (_name) => { return _name.toUpperCase() === name.toUpperCase(); }
            let objects = this.props.projects;

            if (addMode + 1) objects = objects[addMode].vacancies;
            if (objects.filter((obj) => { return condition(obj.name) }).length) {
                message =
                    (addMode + 1) ?
                        'В этом проекте уже есть вакансия с таким названием'
                    :
                        'Проект с таким именем уже существует';
            }
        }

        if (message) {
            passMistakeToInput(this.inputId, message);
        } else {
            document.removeEventListener('keypress', this.onKeyDown);
            if (addMode + 1) {
                this.props.createVacancy(name, this.props.addMode);
            } else {
                this.props.createProject(name);
            }

        }

    }

    onKeyDown = (e) => {
        var key = e.which || e.keyCode;
        if (key === 13) {
            this.clickHandle();
        } else if (key === 27) {
            document.removeEventListener('keydown', this.onKeyDown);
            this.props.quitFromAddMode();
        }
    }

    render() {
        if (this.props.addMode === null) return null;

        setTimeout(
            (function() {
                let input = document.getElementById(this.inputId);
                if (input) {
                    input.focus();
                    document.addEventListener('keydown', this.onKeyDown);
                }
            }).bind(this)
        , 0)


        let head, inputPlaceholder;
        if (this.props.addMode + 1) {
            head = 'Новая вакансия';
            inputPlaceholder = 'Название вакансии';
        } else {
            head = 'Новый проект';
            inputPlaceholder = 'Название проекта';
        }

        return (
            <div className='dark-screen'>
                <div className='adder'>
                    <div className='head'>
                        <span>{head}</span>
                        <div className='cancel' onClick={this.props.quitFromAddMode}>
                            <img src={closeNormal}  alt='' className='normal' />
                            <img src={closeHovered} alt='' className='hovered' />
                            <img src={closePressed} alt='' className='pressed' />
                        </div>
                    </div>
                    <div className='create-form'>
                        <TextInput id={this.inputId} placeholder={inputPlaceholder} />
                        <AppButton
                            value=''
                            text={'СОЗДАТЬ'}
                            className={'green'}
                            onClick={this.clickHandle}
                            />
                    </div>
                </div>
            </div>
        );
    }
}

export default Adder;
