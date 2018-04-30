import React, { Component } from 'react';
import SearchForm from './SearchForm';
import AppButton from './AppButton';

class UIPanel extends Component {

    addProject = () => {
        this.props.switchToAddMode();
    }

    render() {
        return (
            <div className="ui-panel">
                <SearchForm setSearchFilter={this.props.setSearchFilter} />
                <AppButton
                    text={"ДОБАВИТЬ ПРОЕКТ"}
                    className={"green"}
                    onClick={this.addProject}
                    />
            </div>
        );
    }
}

export default UIPanel;
