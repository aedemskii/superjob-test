import React, { Component } from 'react';
import closeNormal from './imgs/close-icon-normal.svg';
import closeHovered from './imgs/close-icon-hovered.svg';
import closePressed from './imgs/close-icon-pressed.svg';
import TextInput from './TextInput';
import AppButton from './AppButton';

class Adder extends Component {
    inputId = "new_object_name";
    clickHandle = () => {
        let input = document.getElementById(this.inputId);
        let name = input.value;
        if (name.replace(/ /g, "").length) {
            this.props.createObject(name, this.props.onAdd);
        } else {
            input.parentElement.classList.add("wrong");
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
                            <img src={closeNormal}  alt="x" className="normal" />
                            <img src={closeHovered} alt="X" className="hovered" />
                            <img src={closePressed} alt="X" className="pressed" />
                        </div>
                    </div>
                    <div className="create-form">
                        <TextInput id={this.inputId} placeholder={inputPlaceholder} />
                        <AppButton
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
