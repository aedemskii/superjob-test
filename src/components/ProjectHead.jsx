import React, {Component} from 'react';
import ProjectUI from './ProjectUI';

class ProjectHead extends Component {
    render() {
        return (
            <div className="project-head">
                <div className={"project-name" + (this.props.isActive ? "" : " grey")}>
                    <span>{this.props.name}</span>
                </div>
                <ProjectUI
                    vacanciesNumber={this.props.vacanciesNumber}
                    isOpened={this.props.isOpened}
                    isActive={this.props.isActive}
                    switchToAddMode={this.props.switchToAddMode}
                    toggleOpenProject={this.props.toggleOpenProject}
                    toggleActiveObject={this.props.toggleActiveObject}
                    deleteObject={this.props.deleteObject}
                    projectIdx={this.props.projectIdx}
                />
            </div>
        );
    }
}

export default ProjectHead;
