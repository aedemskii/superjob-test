import React, {Component} from 'react';
import ProjectUI from './ProjectUI';
import OpenButton from './OpenButton';

class ProjectHead extends Component {

    toggleOpenProject = () => {
        this.props.toggleOpenProject(this.props.projectIdx);
    }

    render() {
        return (
            <div className="project-head">
                <div className={"project-name" + (this.props.isActive ? "" : " grey")}>
                    <span>{this.props.name}</span>
                </div>
                <OpenButton
                    vacanciesNumber={this.props.vacanciesNumber}
                    isOpened={this.props.isOpened}
                    toggleOpenProject={this.toggleOpenProject}
                />
                <ProjectUI
                    projectIdx={this.props.projectIdx}
                    openedVacanciesNumber={this.props.openedVacanciesNumber}
                    isOpened={this.props.isOpened}
                    isActive={this.props.isActive}
                    switchToAddMode={this.props.switchToAddMode}
                    toggleActiveObject={this.props.toggleActiveObject}
                    deleteObject={this.props.deleteObject}
                />
            </div>
        );
    }
}

export default ProjectHead;
