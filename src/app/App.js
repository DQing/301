import React, {Component} from 'react';
import {Layout} from 'antd'
import './App.less'
import TopContent from './TopContent/topContent';
import BottomContent from './BottomContent/bottomContent';

const {Header, Footer, Content} = Layout;

class App extends Component {


    render() {

        return (
            <div className="App">
                <Layout>
                    <Header className="app-header">
                        <span>新增试卷</span>
                    </Header>
                    <Content className="app-content">
                        <TopContent/>
                        <div className="center-line">
                            <hr/>
                        </div>
                        <BottomContent/>
                    </Content>
                    <Footer>Footer</Footer>
                </Layout>
            </div>
        )
    }
}

export default App;
