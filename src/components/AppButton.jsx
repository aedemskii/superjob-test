import React from 'react';
import './styles/AppButton.scss'

function AppButton({onClick, className, text}) {
    return (
        <div className={"app-button " + className} onClick={onClick}>
            <span className="textholder">{text}</span>
        </div>
    );
}

export default AppButton;
