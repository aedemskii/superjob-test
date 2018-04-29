import React, {Component} from 'react';
import ProjectUI from './ProjectUI';

class ProjectHead extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: props.name,
            opened: props.opened,
            active: props.active,
            vacanciesNumber: props.vacanciesNumber
        }
    }
    render() {
        return (
            <div className="project-head">
                <div className="project-name">
                    <span>{this.state.name}</span>
                </div>
                <ProjectUI
                    vacanciesNumber={this.state.vacanciesNumber}
                    opened={this.state.opened}
                    active={this.state.active}
                />
            </div>
        );
    }
}

export default ProjectHead;
