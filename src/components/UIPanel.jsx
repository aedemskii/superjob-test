import React, { Component } from 'react';
import SearchForm from './SearchForm';
import AppCheckbox from './AppCheckbox';
import AppButton from './AppButton';

class UIPanel extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return (
            <div className="ui-panel">
                <SearchForm />
                <AppButton text={"ДОБАВИТЬ ПРОЕКТ"} className={"green"}/>
            </div>
        );
    }
}

export default UIPanel;
