import React, { Component } from 'react';

class TextInput extends Component {
    onClickHandle(e) {
        let input = e.currentTarget;
        input.classList.remove("wrong");
    }
    render() {
        return (
            <div className="text-input-holder">
                <input
                    id={this.props.id}
                    type="text"
                    placeholder={this.props.placeholder}
                    onClick={this.onClickHandle}
                    />
            </div>
        );
    }
}

export default TextInput;
