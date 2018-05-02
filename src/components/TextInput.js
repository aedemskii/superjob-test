import React, { Component } from 'react';

class TextInput extends Component {

    inputOnMouseDown(e) {
        const input = e.currentTarget;
        const inputHolder = input.parentNode;
        const mistake = inputHolder.getElementsByTagName('span')[0];
        inputHolder.classList.remove('wrong');
        mistake.innerHTML = '';
    };

    onChange = (e) => {
        const input = e.currentTarget;
        if (input.value === ' ') {
            input.value = '';
        } else {
            if (this.props.onChange) { this.props.onChange(); }
        }

    };

    render() {
        const mistakeText = (<span id='mistake'>mistake</span>);
        return (
            <div className='text-input-holder'>
                <input
                    id={this.props.id}
                    type='text'
                    value={this.props.value}
                    placeholder={this.props.placeholder}
                    onMouseDown={this.inputOnMouseDown}
                    onChange={this.onChange}
                    data={mistakeText}
                    />
                <div className='mistake'>
                    {mistakeText}
                </div>
            </div>
        );
    }
}

export default TextInput;
