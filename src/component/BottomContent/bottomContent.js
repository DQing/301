import React, {Component} from 'react';
import {Input, Card, Icon, Modal, Table} from 'antd'
import './bottomContent.less'
import addButton from '../../static/addButton.png';
import './bottomContent.less'


class bottomContent extends Component {

    constructor(props) {
        super(props);
        this.state = {
            visible: false,
            selectTopics: [],
            title: "编程题",
            input: false,
            sectionList: []
        }
    }

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

    onClickForm() {
        const flag = this.state.input
        if (!flag) {
            document.getElementById("input-title").removeAttribute("class", "read-only");
            document.getElementById("input-title").setAttribute("class", "input-header");
            this.setState({input: true})
        } else {
            document.getElementById("input-title").removeAttribute("class", "input-header");
            document.getElementById("input-title").setAttribute("class", "read-only");
            this.setState({input: false})
        }
    }

    inputChange(e) {
        const {value} = e.target || '';
        this.setState({title: value})
    }

    inputOnBlur() {
        document.getElementById("input-title").removeAttribute("class", "input-header");
        document.getElementById("input-title").setAttribute("class", "read-only");
        this.setState({input: false})
    }

    onDeleteSection(index) {
        const sectionList = this.state.sectionList
        sectionList.pop()
        this.setState({
            sectionList: sectionList
        })
    }

    addSection() {

        const section = {
            "type": "homeworkQuiz",
            "title": "编程题",
            "definition": {
                "quizzes": ["12345"]
            }
        };
        this.state.sectionList.push(section)
        this.setState({
            sectionList: this.state.sectionList
        })
    }

    render() {
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
            <div className="bottom-content">
                {
                    this.state.sectionList.map((item, index) => {
                        return <div className="section" key={index}>
                            <Card extra={<span>
                                    <Icon type="form" onClick={this.onClickForm.bind(this)}/>
                                    <Icon type="delete" onClick={this.onDeleteSection.bind(this, index)}/>
                                </span>}>
                                <Input type="text" className="read-only" id="input-title"
                                       onChange={this.inputChange.bind(this)}
                                       onBlur={this.inputOnBlur.bind(this)}
                                       value={item.title}/>
                                <div className="topic-list">
                                    <div className="add-button">
                                        <img src={addButton} alt="add-button"
                                             onClick={this.showTopicOption.bind(this)}/>
                                    </div>
                                    <div className="add-topics">
                                        {
                                            this.state.selectTopics.map((item, index) => {
                                                return <div className="topic" key={index}>
                                                    <p className="title"><span>{item.title}</span></p>
                                                    <p className="stack"><span>{item.stack}</span></p>
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
                    })
                }
                <div className="addSectionCard">
                    <Card>
                        <img src={addButton} alt="add-button" onClick={this.addSection.bind(this)}/>
                    </Card>
                </div>
            </div>
        )
    }
}

export default bottomContent
