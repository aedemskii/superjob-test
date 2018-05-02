import React, { Component } from 'react';
import CreateProject from './CreateProject';
import CreateVacancy from './CreateVacancy';

class Modal extends Component {

    render() {
        if (this.props.addMode === null) return null;
        return (
            <div className='dark-screen'>
                <div className='modal'>
                    <CreateProject
                        projects={this.props.projects}
                        addMode={this.props.addMode}
                        createProject={this.props.createProject}
                        quitFromModal={this.props.quitFromModal}
                        />
                    <CreateVacancy
                        projects={this.props.projects}
                        addMode={this.props.addMode}
                        createVacancy={this.props.createVacancy}
                        quitFromModal={this.props.quitFromModal}
                        />
                </div>
            </div>
        );
    }
}

export default Modal;
