import React, {Component} from 'react';
import {Button} from 'antd'
import './App.less';

class App extends Component {
    render() {
        return (
            <div className="App">
                <Button type="primary">Primary</Button>
                <Button>Default</Button>
                <Button type="dashed">Dashed</Button>
                <Button type="danger">Danger</Button>
                <p className="test">
                    sdofja
                </p>
            </div>
        );
    }
}

export default App;
