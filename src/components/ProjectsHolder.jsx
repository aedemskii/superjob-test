import React, { Component } from 'react';
import Project from './Project';

class ProjectsHolder extends Component {
    render() {
        let projects = [];
        let len = projects.length;
        for ( let idx = 0; idx <= len; idx++ ) {
            projects.push( <Project key={idx}/> );
        }
        return (
            <div className="project-holder">
                {projects}
            </div>
        );
    }
}

export default ProjectsHolder;
