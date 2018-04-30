import React, { Component } from 'react';

class TextInput extends Component {
    inputOnMouseOver(e) {
        let input = e.currentTarget;
        input.parentElement.classList.remove("wrong");
    }

    render() {
        let mistakeText = (<span>mistake</span>);
        return (
            <div className="text-input-holder">
                <input
                    id={this.props.id}
                    type="text"
                    placeholder={this.props.placeholder}
                    onMouseOver={this.inputOnClick}
                    onChange={this.props.onChange}
                    data={mistakeText}
                    />
                <div className="mistake">
                    {mistakeText}
                </div>
            </div>
        );
    }
}

export default TextInput;
