import React from 'react';
import './styles/AppButton.css'

function AppButton({onClick, className, text}) {
    return (
        <span className={"app-button " + className} onClick={onClick}>
            <span className="placeHolder">
                <span className="textHolder">{text}</span>
            </span>
        </span>
    );
}

export default AppButton;
