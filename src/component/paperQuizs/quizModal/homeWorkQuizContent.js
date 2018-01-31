import React, {Component} from 'react';
import {Table, Row, Col, Input} from 'antd';
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
            <div>
                <div className="search">
                    <Row>
                        <Col span={3}>
                            <span>搜索</span>
                        </Col>
                        <Col span={14}>
                            <Input placeholder="请至少输入3个字符"/>
                        </Col>
                    </Row>
                </div>
                <Table bordered hover striped
                       rowSelection={rowSelection}
                       dataSource={this.props.homeWorkQuiz}
                       columns={columns}
                       pagination={false}/>
            </div>
        )
    }
}

const mapStateToProps = state => ({homeWorkQuiz: state.homeWorkQuiz});
const mapDispatchToProps = dispatch => ({
    getHomeWorkQuiz: () => dispatch(homeWorkQuizAction.getHomeWorkQuiz())
});

export default connect(mapStateToProps, mapDispatchToProps)(homeWorkQuizContent);
