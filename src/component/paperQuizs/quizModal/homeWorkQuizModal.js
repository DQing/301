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
        this.props.handleOk(this.state.selectTopics, this.props.index);
    }

    handleCancel() {
        this.props.handleCancel()
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
                    selectTopics: selectedRows[0]
                });
            }
        };
        return (
            <Modal
                title="试卷列表"
                visible={visible}
                width="598px"
                onOk={this.handleOk.bind(this)}
                destroyOnClose={true}
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
