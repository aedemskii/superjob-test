import React, { Component } from 'react';
import AppCheckbox from './AppCheckbox';
import TextInput from './TextInput';

class SearchForm extends Component {
    inputId = "search_filter";
    setSearchFilter = () => {
        let input = document.getElementById(this.inputId);
        this.props.setSearchFilter(input.value);
    }

    render() {
        return (
            <div className="search-form">
                <TextInput
                    id={this.inputId}
                    placeholder="Поиск по вакансиям"
                    onChange={this.setSearchFilter}
                    />
                <AppCheckbox
                    setSearchFilter={this.props.setSearchFilter}
                    />
            </div>
        );
    }
}

export default SearchForm;
