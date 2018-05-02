import React from 'react';
import './styles/AppButton.scss';

function AppButton({onClick = () => {}, className = '', text = 'КНОПКА'}) {
    if (className.length) { className = ' ' + className; }
    return (
        <div className={'app-button' + className} onClick={onClick}>
            <span className='textholder'>{text}</span>
        </div>
    );
}

export default AppButton;
