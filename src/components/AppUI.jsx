import React, { Component } from 'react';
// import '../App.css';
import ButtonsHolder from './ButtonsHolder';
import ProjectsHolder from './ProjectsHolder';

class AppUI extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <div className="app-ui">
                <ButtonsHolder />
                <ProjectsHolder />
            </div>
        );
    }
}

export default AppUI;
