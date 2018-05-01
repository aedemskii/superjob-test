import React, { Component } from 'react';
import closeNormal from './imgs/close-icon-normal.svg';
import closeHovered from './imgs/close-icon-hovered.svg';
import closePressed from './imgs/close-icon-pressed.svg';
import passMistakeToInput from './passMistakeToInput';
import TextInput from './TextInput';
import AppButton from './AppButton';

class Adder extends Component {
    inputId = "new_object_name";
    clickHandle = () => {
        let input = document.getElementById(this.inputId);
        let name = input.value;
        if (name.length === 0) {
            passMistakeToInput(this.inputId, "У проекта должно быть название");
        } else {
            this.props.createObject(name, this.props.onAdd);
        }

    }

    render() {
        if (this.props.onAdd === null) return true;

        let head, inputPlaceholder;
        if (this.props.onAdd + 1) {
            head = "Новая вакансия";
            inputPlaceholder = "Название вакансии";
        } else {
            head = "Новый проект";
            inputPlaceholder = "Название проекта";
        }

        return (
            <div className="dark-screen">
                <div className="adder">
                    <div className="head">
                        <span>{head}</span>
                        <div className="cancel" onClick={this.props.quitFromAddMode}>
                            <img src={closeNormal}  alt="" className="normal" />
                            <img src={closeHovered} alt="" className="hovered" />
                            <img src={closePressed} alt="" className="pressed" />
                        </div>
                    </div>
                    <div className="create-form">
                        <TextInput id={this.inputId} placeholder={inputPlaceholder} />
                        <AppButton
                            value=""
                            text={"СОЗДАТЬ"}
                            className={"green"}
                            onClick={this.clickHandle}
                            />
                    </div>
                </div>
            </div>
        );
    }
}

export default Adder;
