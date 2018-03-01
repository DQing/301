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
            selectTopics: []
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

    modifyContent() {
        const {sectionList, index, itemIndex, isModify} = this.props;
        let result = {};
        if (isModify) {
            return result = sectionList[index].quizzes[itemIndex]
        }
        return result;
    }

    renderModalContent(quizType) {
        const {sectionList, index, isModify} = this.props;
        const result = this.modifyContent();
        if (quizType === 'homeworkQuiz') {
            return <HomeWorkQuizContent quizzes={sectionList[index].quizzes}
                                        getQuizData={(selectTopics) => this.getQuizData(selectTopics)}/>

        } else if (quizType === 'subjectQuiz') {
            return <SubjectQuizContent isModify={isModify}
                                       result={result}
                                       getQuizData={(selectTopics) => this.getQuizData(selectTopics)}/>

        } else if (quizType === 'basicQuiz') {
            return <BasicQuizContent getQuizData={(selectTopics) => this.getQuizData(selectTopics)}/>
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
