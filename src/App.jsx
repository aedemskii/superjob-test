import React, { Component } from 'react';
import './App.css';
import AppUI from './components/AppUI'

class App extends Component {
    
    render() {
        return (
            <div className="app-body">
                <div className="app-header">Список проектов</div>
                <AppUI />
            </div>
        );
    }
}

export default App;
