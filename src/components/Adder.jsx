import React, { Component } from 'react';
import closeNormal from './imgs/close-icon-normal.svg';
import closeHovered from './imgs/close-icon-hovered.svg';
import closePressed from './imgs/close-icon-pressed.svg';
import TextInput from './TextInput';
import AppButton from './AppButton';

class Adder extends Component {
    // здесь достаем все состояние
    render() {
        return (
            <div className="dark-screen">
                <div className="adder">
                    <div className="head">
                        <span>***********</span>
                        <div className="cancel">
                            <img src={closeNormal} className="normal" />
                            <img src={closeHovered} className="hovered" />
                            <img src={closePressed} className="pressed" />
                        </div>
                    </div>
                    <div className="create-form">
                        <TextInput placeholder="Название *********" />
                        <AppButton text={"СОЗДАТЬ"} className={"green"}/>
                    </div>
                </div>
            </div>
        );
    }
}

export default Adder;
