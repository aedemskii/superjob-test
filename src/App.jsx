import React, { Component } from 'react';
import './App.scss';
import UIPanel from './components/UIPanel';
import ProjectsHolder from './components/ProjectsHolder';

class App extends Component {

    render() {
        return (
            <div className="app-body">
                <div className="app-header"><span>Список проектов</span></div>
                <div className="app-ui">
                    <UIPanel />
                    <ProjectsHolder />
                </div>
            </div>
        );
    }
}

export default App;
