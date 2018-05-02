import React, { Component } from 'react';
import passMistakeToInput from './utils/passMistakeToInput';
import TextInput from './TextInput';
import AppButton from './AppButton';

class createProject extends Component {
    inputId = 'new_project_name';

    clickHandle = () => {
        const input = document.getElementById(this.inputId);
        const name = input.value;
        let message;
        if (name.length === 0) {
            message = 'У проекта должно быть название';
        } else {
            const condition = (_name) => { return _name.toUpperCase() === name.toUpperCase(); }
            let projects = this.props.projects;

            if (projects.filter((proj) => { return condition(proj.name) }).length) {
                message = 'Проект с таким именем уже существует';
            }
        }

        if (message) {
            passMistakeToInput(this.inputId, message);
        } else {
            document.removeEventListener('keydown', this.onKeyDown);
            this.props.createProject(name);
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
        if (this.props.addMode + 1) return null;

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
            <div className='modal-project'>
                <div className='head'>
                    <span>Новый проект</span>
                </div>
                <div className='create-form'>
                    <TextInput id={this.inputId} placeholder='Название проекта' />
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

export default createProject;
