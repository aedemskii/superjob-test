import React, { Component } from 'react';
import './App.scss';
import UIPanel from './components/UIPanel';
import ProjectsHolder from './components/ProjectsHolder';
import Adder from './components/Adder';

class App extends Component {
    // здесь достаем все состояние
    render() {
        return (
            <div className="app-body">
                <div className="app-header"><span>Список проектов</span></div>
                <div className="app-ui">
                    <UIPanel />
                    <ProjectsHolder />
                    <Adder />
                </div>
            </div>
        );
    }
}

export default App;
