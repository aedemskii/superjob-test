import React, { Component } from 'react';
import closeNormal from './imgs/close-icon-normal.svg';
import closeHovered from './imgs/close-icon-hovered.svg';
import closePressed from './imgs/close-icon-pressed.svg';
import TextInput from './TextInput';
import AppButton from './AppButton';

class Adder extends Component {
    inputId = "new_object_name"
    clickHandle = () => {
        let name = document.getElementById(this.inputId);
        this.props.createObject(name, this.props.onAdd);
    }

    render() {
        if (this.props.onAdd === null) return true;

        let head, inputPlaceholder;
        if (this.props.onAdd + 1) {
            head = "Новый проект";
            inputPlaceholder = "Название проекта";
        } else {
            head = "Новая вакансия";
            inputPlaceholder = "Название вакансии";
        }

        return (
            <div className="dark-screen">
                <div className="adder">
                    <div className="head">
                        <span>{head}</span>
                        <div className="cancel" onClick={this.props.quitFromAddMode}>
                            <img src={closeNormal} className="normal" />
                            <img src={closeHovered} className="hovered" />
                            <img src={closePressed} className="pressed" />
                        </div>
                    </div>
                    <div className="create-form">
                        <TextInput id={this.inputId} placeholder={inputPlaceholder} />
                        <AppButton text={"СОЗДАТЬ"} className={"green"}/>
                    </div>
                </div>
            </div>
        );
    }
}

export default Adder;
