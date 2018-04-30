import React, { Component } from 'react';
import './App.scss';
import UIPanel from './components/UIPanel';
import ProjectsHolder from './components/ProjectsHolder';
import Adder from './components/Adder';

class App extends Component {
    constructor(props) {
        super(props);
        let projects = []
        try { projects = JSON.parse(window.localStorage.getItem('__notes_storage')) }
        catch (err) { console.warn("window.localStorage.getItem() is failed") }
        this.state = {
            projects: projects,
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

    switchToAddMode = (projectIdx) => {
        this.setState({ onAdd: projectIdx || -1 });
    }

    quitFromAddMode = () => {
        this.setState({ onAdd: null });
    }

    createObject = (name, projectIdx = -1) => {
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
    }

    deleteObject = (projectIdx, vacancyIdx = -1) => {
        let projects = this.state.projects.slice();
        if (vacancyIdx + 1) {
            projects[ projectIdx ].splice(vacancyIdx, 1);
        } else {
            projects.splice(projectIdx, 1)
        }
        this.setState({ projects: projects });
        this.save();
    }

    toggleActiveObject = (projectIdx, vacancyIdx = -1) => {
        let currentElem, projects = this.state.projects.slice();
        currentElem = projects[ projectIdx ];

        if (vacancyIdx + 1) {
            currentElem = currentElem.vacancies[ vacancyIdx ];
            currentElem.isActive = !currentElem.isActive;
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
    }

    toggleOpenProject = (projectIdx) => {
        let projects = this.state.projects.slice();
        projects[ projectIdx ].isOpened = !projects[ projectIdx ].isOpened;

        this.setState({ projects: projects });
        this.save();
    }

    setSearchFilter = (stringFilter) => {
        let newSearchFilter = Object.assign({}, this.state.searchFilter);
        if (stringFilter) {
            newSearchFilter.name = stringFilter;
        } else {
            newSearchFilter.activeOnly = !newSearchFilter.activeOnly
        }

        this.setState({ searchFilter: newSearchFilter });
    }


    render() {
        // this.save();
        return (
            <div className="app-body">
                <div className="app-header"><span>Список проектов</span></div>
                <div className="app-ui">
                    <UIPanel
                        setSearchFilter={this.setSearchFilter}
                        switchToAddMode={this.switchToAddMode}
                        />
                    <ProjectsHolder
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
