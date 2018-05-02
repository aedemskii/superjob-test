import React, { Component } from 'react';
import closeNormal from './imgs/close-icon-normal.svg';
import closeHovered from './imgs/close-icon-hovered.svg';
import closePressed from './imgs/close-icon-pressed.svg';
import CreateProject from './CreateProject';
import CreateVacancy from './CreateVacancy';

class Modal extends Component {

    render() {
        if (this.props.addMode === null) return null;
        return (
            <div className='dark-screen'>
                <div className='modal'>
                    <div className='modal-content'>
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
                        <div className='cancel' onClick={this.props.quitFromModal}>
                            <img src={closeNormal}  alt='' className='normal' />
                            <img src={closeHovered} alt='' className='hovered' />
                            <img src={closePressed} alt='' className='pressed' />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Modal;
