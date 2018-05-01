import React, { Component } from 'react';
import './App.scss';
import defaultProjects from './components/defaultProjects.js';
import UIPanel from './components/UIPanel';
import ProjectsHolder from './components/ProjectsHolder';
import Adder from './components/Adder';

class App extends Component {
    constructor(props) {
        super(props);
        let projects;
        try {
            projects = JSON.parse(window.localStorage.getItem('__app_state'))
        }
        catch (err) {
            console.warn("window.localStorage.getItem() is failed");
        }
        this.state = {
            projects: projects || defaultProjects(),
            onAdd: null,
            searchFilter: {
                activeOnly: false,
                name: ""
            }
        };

    }

    save = () => {
        try {
            window.localStorage.setItem('__app_state', JSON.stringify(this.state.projects));
        }
        catch (err) {
            console.warn("save() is failed");
        }
    }

    switchToAddMode = (function(projectIdx = -1) {
        this.setState({ onAdd: projectIdx });
    }).bind(this);

    quitFromAddMode = (function() {
        this.setState({ onAdd: null });
    }).bind(this);

    createObject = (function(name, projectIdx = -1) {
        let projects = this.state.projects.slice();
        if (projectIdx + 1) {
            projects[ projectIdx ].vacancies.push({
                name: name,
                isActive: true
            })
        } else {
            projects.push({
                name: name,
                vacancies: [],
                isActive: true,
                isOpened: false
            })
        }
        this.setState({ projects: projects });
        this.save();
        this.quitFromAddMode();
    }).bind(this);

    deleteObject = (function(projectIdx, vacancyIdx = -1) {
        let projects = this.state.projects.slice();
        if (vacancyIdx + 1) {
            projects[ projectIdx ].vacancies.splice(vacancyIdx, 1);
        } else {
            projects.splice(projectIdx, 1)
        }
        this.setState({ projects: projects });
        this.save();
    }).bind(this);

    toggleActiveObject = (function(projectIdx, vacancyIdx = -1) {
        let currentElem, projects = this.state.projects.slice();
        currentElem = projects[ projectIdx ];

        if (vacancyIdx + 1) {
            let project = currentElem;
            currentElem = currentElem.vacancies[ vacancyIdx ];
            currentElem.isActive = !currentElem.isActive;
            if (currentElem.isActive) {
                project.isActive = true;
            }
        }
        else if (currentElem.isActive) {
            currentElem.isActive = false;
            let len = currentElem.vacancies.length;
            for ( let idx = 0; idx < len; idx++ ) {
                currentElem.vacancies[idx].isActive = false;
            }
        }
        else {
            currentElem.isActive = true;
        }

        this.setState({ projects: projects });
        this.save();
    }).bind(this);

    toggleOpenProject = (function(projectIdx) {
        let projects = this.state.projects.slice();
        projects[ projectIdx ].isOpened = !projects[ projectIdx ].isOpened;

        this.setState({ projects: projects });
        this.save();
    }).bind(this);

    clearSearchFilter = (function() {
        let newSearchFilter = {
            name: "",
            activeOnly: false
        }
        this.setState({ searchFilter: newSearchFilter });
    }).bind(this);

    setSearchFilter = (function(stringFilter) {
        let newSearchFilter = Object.assign({}, this.state.searchFilter);
        if (typeof(stringFilter) === "string") {
            newSearchFilter.name = stringFilter;
        } else {
            newSearchFilter.activeOnly = !newSearchFilter.activeOnly
        }
        this.setState({ searchFilter: newSearchFilter });
    }).bind(this);


    render() {
        this.save();
        return (
            <div className="app-body">
                <div className="app-header"><span>Список проектов</span></div>
                <div className="app-ui">
                    <UIPanel
                        searchFilter={this.state.searchFilter}
                        setSearchFilter={this.setSearchFilter}
                        clearSearchFilter={this.clearSearchFilter}
                        switchToAddMode={this.switchToAddMode}
                        />
                    <ProjectsHolder
                        projects={this.state.projects}
                        searchFilter={this.state.searchFilter}
                        switchToAddMode={this.switchToAddMode}
                        toggleOpenProject={this.toggleOpenProject}
                        toggleActiveObject={this.toggleActiveObject}
                        deleteObject={this.deleteObject}
                        />
                    <Adder
                        onAdd={this.state.onAdd}
                        createObject={this.createObject}
                        quitFromAddMode={this.quitFromAddMode}                        
                        />
                </div>
            </div>
        );
    }
}

export default App;
