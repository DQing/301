import React, {Component} from 'react';
import {Layout, Input, Form, Checkbox, Card, Icon, Modal, Table} from 'antd'
import './App.less'
import addButton from '../static/addButton.png';

const {Header, Footer, Content} = Layout;

const FormItem = Form.Item;
const {TextArea} = Input;

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            easy: '',
            general: '',
            difficult: '',
            visible: false,
            selectTopics: []
        }
    }

    static onHandleChange() {
        document.getElementsByClassName("inputs-group")[0].removeAttribute("hidden")
    }

    onNumberChange = (e) => {

        const reg = /^-?(0|[1-9][0-9]*)(\.[0-9]*)?$/;
        const value = document.getElementsByName(e)[0].value;
        if ((!isNaN(value) && reg.test(value) && e === 'easy') || value === '') {
            this.setState({easy: value})
        } else if ((!isNaN(value) && reg.test(value) && e === 'general') || value === '') {
            this.setState({general: value})
        } else if ((!isNaN(value) && reg.test(value) && e === 'difficult') || value === '') {
            this.setState({difficult: value})
        }
    };

    showTopicOption() {
        this.setState({
            visible: true
        })

    }

    handleOk() {
        this.setState({
            visible: false
        })
    }

    handleCancel() {
        this.setState({
            visible: false
        })
    }

    render() {
        const {getFieldDecorator} = this.props.form;
        const formItemLayout = {
            labelCol: {
                xs: {span: 24},
                sm: {span: 4, offset: 4},
            },
            wrapperCol: {
                xs: {span: 24},
                sm: {span: 10},
            },
        };
        const dataSource = [
            {
                "_id": "1",
                "title": "react",
                "stack": "Javascript",
                "creator": "admin",
                "createTime": "2018-1-23",
                "key": '1'
            }, {
                "_id": "2",
                "title": "jersey",
                "stack": "Java+Gradle",
                "creator": "admin",
                "createTime": "2018-1-23",
                "key": '2'
            }, {
                "_id": "3",
                "title": "react",
                "stack": "Javascript",
                "creator": "admin",
                "createTime": "2018-1-23",
                "key": '3'
            }, {
                "_id": "4",
                "title": "react",
                "stack": "Javascript",
                "creator": "admin",
                "createTime": "2018-1-23",
                "key": '4'
            }, {
                "_id": "5",
                "title": "react",
                "stack": "Javascript",
                "creator": "admin",
                "createTime": "2018-1-23",
                "key": '5'
            },
        ];
        const columns = [
            {
                title: '试卷名称',
                dataIndex: 'title',
                key: 'title'
            },

            {
                title: '题目类型',
                dataIndex: 'stack',
                key: 'stack'
            },

            {
                title: '创建人',
                dataIndex: 'creator',
                key: 'creator'
            },

            {
                title: '试卷名称',
                dataIndex: 'createTime',
                key: 'createTime'
            },
        ]
        const rowSelection = {
            onChange: (selectedRowKeys, selectedRows) => {
                this.setState({
                    selectTopics: selectedRows
                });
                console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
            }
        };
        return (
            <div className="App">
                <Layout>
                    <Header className="app-header">
                        <span>新增试卷</span>
                    </Header>
                    <Content className="app-content">
                        <div className="top-content">
                            <Form name="myForm">
                                <FormItem
                                    {...formItemLayout}
                                    label="试卷名称"
                                >
                                    {getFieldDecorator('name', {
                                        rules: [{
                                            max: true, message: '试卷名称长度不能超过32个字符'
                                        }],
                                    })(
                                        <Input placeholder="请输入试卷名称"/>
                                    )}
                                </FormItem>
                                <FormItem
                                    {...formItemLayout}
                                    label="试卷描述"
                                >
                                    {getFieldDecorator('examDescription', {
                                        rules: [{
                                            max: true, message: '试卷描述长度不能超过255个字符'
                                        }],
                                    })(
                                        <TextArea placeholder="请输入试卷描述"/>
                                    )}
                                </FormItem>
                                <FormItem
                                    {...formItemLayout}
                                    label="逻辑题"
                                >
                                    <Checkbox onChange={App.onHandleChange}/>
                                    <div className="inputs-group" hidden>
                                        <span className="type">简单</span>
                                        <Input size="large" name="easy"
                                               onChange={this.onNumberChange.bind(this, 'easy')}
                                               value={this.state.easy}/>
                                        <span className="type">一般</span>
                                        <Input size="large" name="general"
                                               onChange={this.onNumberChange.bind(this, 'general')}
                                               value={this.state.general}/>
                                        <span className="type">困难</span>
                                        <Input size="large" name="difficult"
                                               onChange={this.onNumberChange.bind(this, 'difficult')}
                                               value={this.state.difficult}/>
                                    </div>

                                </FormItem>

                            </Form>
                        </div>
                        <div className="center-line">
                            <hr/>
                        </div>
                        <div className="bottom-content">
                            <Card title="编程题"
                                  extra={<span>
                                      <Icon type="form"/>
                                      <Icon type="delete"/>
                                  </span>}>
                                <div className="topic-list">
                                    <div className="add-button">
                                        <img src={addButton} alt="add-button"
                                             onClick={this.showTopicOption.bind(this)}/>
                                    </div>
                                    <div className="add-topics">
                                        {
                                            this.state.selectTopics.map((item, index) => {
                                                return <div className="topic" key={index}>
                                                    <p className="title">{item.title}</p>
                                                    <p className="stack">{item.stack}</p>
                                                </div>
                                            })
                                        }
                                    </div>
                                    <div className="modal">
                                        <Modal
                                            title="试卷列表"
                                            visible={this.state.visible}
                                            onOk={this.handleOk.bind(this)}
                                            onCancel={this.handleCancel.bind(this)}>
                                            <Table bordered hover striped
                                                   rowSelection={rowSelection} dataSource={dataSource}
                                                   columns={columns}
                                                   pagination={false}/>
                                        </Modal>
                                    </div>
                                </div>
                            </Card>
                        </div>
                    </Content>
                    <Footer>Footer</Footer>
                </Layout>
            </div>
        )
    }
}

const WrappedRegistrationForm = Form.create()(App);
export default WrappedRegistrationForm;
