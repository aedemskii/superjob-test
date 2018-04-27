import React, { Component } from 'react';
import SearchForm from './SearchForm';
import AppCheckbox from './AppCheckbox';
import AppButton from './AppButton';

class ButtonsHolder extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <div className="buttons-holder">
                <SearchForm />
                <AppCheckbox />
                <AppButton />
            </div>
        );
    }
}

export default ButtonsHolder;
