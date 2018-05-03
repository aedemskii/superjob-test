import React, { Component } from 'react';
import './App.scss';
import defaultProjects from './components/utils/defaultProjects';
import UIPanel from './components/UIPanel';
import ProjectsHolder from './components/ProjectsHolder';
import Modal from './components/Modal';

class App extends Component {
    constructor(props) {
        super(props);
        let projects;
        try {
            projects = JSON.parse(window.localStorage.getItem('__app_state'));
        }
        catch (err) {
            console.warn("window.localStorage.getItem() is failed");
        }
        this.state = {
            projects: projects || defaultProjects(),
            addMode: null,
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
    };

    switchToAddMode = (projectIdx = -1) => {
        this.setState({ addMode: projectIdx });
    };

    quitFromModal = () => {
        this.setState({ addMode: null });
    };

    createProject = (name) => {
        name = name[0].toUpperCase() + name.slice(1);
        const projects = this.state.projects.slice();

        projects.push({
            name: name,
            vacancies: [],
            isActive: true,
            isOpened: false
        })

        this.setState({ projects: projects });
        this.save();
        this.quitFromModal();
    };

    createVacancy = (name, projectIdx) => {
        name = name[0].toUpperCase() + name.slice(1);
        const projects = this.state.projects.slice();

        projects[ projectIdx ].vacancies.push({
            name: name,
            isActive: true
        })

        this.setState({ projects: projects });
        this.save();
        this.quitFromModal();
    };

    deleteProject = (projectIdx) => {
        const projects = this.state.projects.slice();
        projects.splice(projectIdx, 1);
        this.setState({ projects: projects });
        this.save();
    };

    deleteVacancy = (projectIdx, vacancyIdx) => {
        const projects = this.state.projects.slice();
        projects[ projectIdx ].vacancies.splice(vacancyIdx, 1);
        if (!projects[ projectIdx ].vacancies.length) {
            projects[ projectIdx ].isOpened = false;
        }
        this.setState({ projects: projects });
        this.save();
    };

    toggleActiveProject = (projectIdx) => {
        const projects = this.state.projects.slice();
        const project = projects[ projectIdx ];
        project.isActive = !project.isActive;
        if (!project.isActive) {
            project.vacancies.forEach(
                (vacancy) => {
                    vacancy.isActive = false;
                }
            )
        }
        this.setState({ projects: projects });
        this.save();
    };

    toggleActiveVacancy = (projectIdx, vacancyIdx) => {
        const projects = this.state.projects.slice();
        const project = projects[ projectIdx ];
        const vacancy = project.vacancies[ vacancyIdx ];
        vacancy.isActive = !vacancy.isActive;
        if (vacancy.isActive) {
            project.isActive = true;
        }
        this.setState({ projects: projects });
        this.save();
    };

    toggleOpenProject = (projectIdx) => {
        const projects = this.state.projects.slice();
        projects[ projectIdx ].isOpened = !projects[ projectIdx ].isOpened;

        this.setState({ projects: projects });
        this.save();
    };

    clearSearchFilter = () => {
        const newSearchFilter = {
            name: "",
            activeOnly: false
        }
        this.setState({ searchFilter: newSearchFilter });
    };

    setSearchFilter = (stringFilter) => {
        const newSearchFilter = Object.assign({}, this.state.searchFilter);
        if (typeof(stringFilter) === "string") {
            newSearchFilter.name = stringFilter;
        } else {
            newSearchFilter.activeOnly = !newSearchFilter.activeOnly;
        }
        this.setState({ searchFilter: newSearchFilter });
    };

    fixUIPanel = () => {
        const appBody = document.getElementById('app-body');
        const UIPanel = document.getElementById("ui-panel");
        if (!this.fixUIPanel.sticky) { this.fixUIPanel.sticky = UIPanel.offsetTop; }
        if (appBody.scrollTop >= this.fixUIPanel.sticky) {
            UIPanel.classList.add("sticky");
        } else {
            UIPanel.classList.remove("sticky");
        }
    };


    render() {
        this.save();
        setTimeout(
            () => {
                const appBody = document.getElementById('app-body');
                appBody.onscroll = () => {this.fixUIPanel()};
            }, 0)

        return (
            <div id='app-body' className="app-body">
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
                        toggleActiveProject={this.toggleActiveProject}
                        toggleActiveVacancy={this.toggleActiveVacancy}
                        deleteProject={this.deleteProject}
                        deleteVacancy={this.deleteVacancy}
                        />
                    <Modal
                        projects={this.state.projects}
                        addMode={this.state.addMode}
                        createProject={this.createProject}
                        createVacancy={this.createVacancy}
                        quitFromModal={this.quitFromModal}
                        />
                </div>
            </div>
        );
    }
}

export default App;
