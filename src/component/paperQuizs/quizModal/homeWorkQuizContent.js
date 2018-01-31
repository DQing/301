import React, {Component} from 'react';
import {Table} from 'antd';
import {connect} from 'react-redux';
import * as homeWorkQuizAction from '../../../actions/homeWorkQuiz';

class homeWorkQuizContent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selected: ["1"]
        }
    }

    componentDidMount() {
        // this.props.getHomeWorkQuiz();
    }

    render() {
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
        const that = this;
        const {selected} = that.state;
        const rowSelection = {
            getCheckboxProps: record => ({
                disabled: selected.includes(record["_id"])
            }),
            onChange: (selectedRowKeys, selectedRows) => {
                this.props.getQuizData(selectedRows[0]);
            },
            type: "radio",
            hideDefaultSelections: true
        };
        return (
            <Table bordered hover striped
                   rowSelection={rowSelection}
                   dataSource={this.props.homeWorkQuiz}
                   columns={columns}
                   pagination={false}/>
        )
    }
}

const mapStateToProps = state => ({homeWorkQuiz: state.homeWorkQuiz});
const mapDispatchToProps = dispatch => ({
    getHomeWorkQuiz: () => dispatch(homeWorkQuizAction.getHomeWorkQuiz())
});

export default connect(mapStateToProps, mapDispatchToProps)(homeWorkQuizContent);
