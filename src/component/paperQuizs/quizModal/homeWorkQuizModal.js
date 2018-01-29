import React, {Component} from 'react';
import {Modal, Table} from 'antd';
import * as quiz from '../../../constant/data';

class homeQuizModal extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectTopics: []
        };
    }

    handleOk() {
        console.log('=========')
        this.props.handleOk('HomeQuizModal', this.state.selectTopics);
    }

    handleCancel() {
        this.props.handleCancel('HomeQuizModal')
    }

    render() {
        const {visible} = this.props;
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
        ];
        const rowSelection = {
            onChange: (selectedRowKeys, selectedRows) => {
                this.setState({
                    selectTopics: selectedRows
                });
            }
        };
        return (
            <Modal
                title="试卷列表"
                visible={visible}
                onOk={this.handleOk.bind(this)}
                onCancel={this.handleCancel.bind(this)}>
                <Table bordered hover striped
                       rowSelection={rowSelection} dataSource={quiz.homeworkQuiz}
                       columns={columns}
                       pagination={false}/>
            </Modal>
        )
    }
}

export default homeQuizModal;
