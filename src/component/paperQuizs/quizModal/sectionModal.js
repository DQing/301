import React, {Component} from 'react';
import {Modal} from 'antd';
import * as data from '../../../constant/data';
import HomeWorkQuizContent from './homeWorkQuizContent';
import SubjectQuizContent from './subjectQuizContent';
import BasicQuizContent from './basicQuizContent';
import '../../../style/sectionModal.less';

class sectionModal extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectTopics: [],
            result: ''
        };

    }

    handleOk() {
        this.props.handleOk(this.state.selectTopics, this.props.index);
    }

    handleCancel() {
        this.props.handleCancel(this.props.index)
    }

    getQuizData(selectTopics) {
        this.setState({
            selectTopics: selectTopics
        })
    }

    componentWillReceiveProps(nextProps) {
        const {sectionList, index, itemIndex, isModify} = nextProps;
        if (isModify) {
            this.setState({
                result: sectionList[index].quizzes[itemIndex]
            });
        }
    }

    renderModalContent(quizType) {
        const {sectionList, index, isModify} = this.props;
        if (quizType === 'homeworkQuiz') {
            return <HomeWorkQuizContent quizzes={sectionList[index].quizzes}
                                        getQuizData={(selectTopics) => this.getQuizData(selectTopics)}/>

        } else if (quizType === 'subjectQuiz') {
            return <SubjectQuizContent isModify={isModify}
                                       result={this.state.result}
                                       getQuizData={(selectTopics) => this.getQuizData(selectTopics)}/>

        } else if (quizType === 'basicQuiz') {
            return <BasicQuizContent
                isModify={isModify}
                result={this.state.result}
                getQuizData={(selectTopics) => this.getQuizData(selectTopics)}/>
        }
        return '';

    }

    render() {
        const {visible, quizType} = this.props;
        const title = data.modalTitle[quizType];

        return <Modal
            title={title}
            visible={visible}
            destroyOnClose={true}
            width="598px"
            onOk={this.handleOk.bind(this)}
            onCancel={this.handleCancel.bind(this)}>
            {this.renderModalContent(quizType)}
        </Modal>
    }
}

export default sectionModal;
