import React, {Component} from 'react';
import {Input, Card, Icon, Radio} from 'antd'
import '../../style/paperQuizs.less'
import addButton from '../../static/addButton.png';
import * as Type from '../../constant/quiz-type';
import HomeQuizModal from './quizModal/homeWorkQuizModal';
import SubjectQuizModal from './quizModal/subjectQuizModal';
import BasisQuizModal from './quizModal/basicQuizModal';


const RadioGroup = Radio.Group;


class bottomContent extends Component {

    constructor(props) {
        super(props);
        this.state = {
            visible: false,
            quizTitle: '',
            quizType: '',
            input: false,
            sectionList: []
        }
    }

    showQuizModal() {
        this.setState({
            visible: true
        })
    }

    handleOk(selectTopics, index) {
        debugger
        this.state.sectionList[index]['quizzes'] = [];
        this.state.sectionList[index]['quizzes'].push(selectTopics);

        this.setState({
            visible: false,
            sectionList: this.state.sectionList
        })
    }

    handleCancel() {
        this.setState({
            visible: false,
        })
    }

    inputChange(index, e) {
        const {value} = e.target || '';
        this.state.sectionList[index].quizTitle = value;
        this.setState({
            sectionList: this.state.sectionList
        });
    }

    onClickForm() {
        const input = this.state.input;
        this.setState({input: !input})

    }

    inputOnBlur() {
        this.setState({input: false})
    }

    onDeleteSection(index) {
        const sectionList = this.state.sectionList;
        sectionList.splice(index, 1);
        this.setState({
            sectionList: sectionList
        })
    }

    addSection() {
        const {quizTitle, quizType} = this.state;

        const section = {
            "type": quizType,
            "quizTitle": quizTitle
        };
        if (quizTitle !== '' && quizType !== '') {
            this.state.sectionList.push(section);
            this.setState({
                sectionList: this.state.sectionList
            })
        }
    }

    onRadioChange(e) {
        const value = parseInt(e.target.value);
        const key = Object.keys(Type.quizType[value - 1])[0];
        this.setState({
            quizType: key,
            quizTitle: Type.quizType[value - 1][key]
        });
    }

    render() {
        const {input} = this.state;
        return (
            <div className="bottom-content">
                {
                    this.state.sectionList.map((item, index) => {
                        return <div className="section" key={index}>
                            <Card extra={<span>
                                {input ? '' : <Icon type="form" onClick={this.onClickForm.bind(this)}/>}
                                <Icon type="delete" onClick={this.onDeleteSection.bind(this, index)}/>
                                </span>}>
                                {
                                    input ? <Input type="text" id="input-title"
                                                   onChange={this.inputChange.bind(this, index)}
                                                   onBlur={this.inputOnBlur.bind(this)}
                                                   value={item.quizTitle}/> :
                                        <span className="quizType">{item.quizTitle}</span>

                                }

                                <div className="topic-list">
                                    <div className="add-button">
                                        <img src={addButton} alt="add-button"
                                             onClick={this.showQuizModal.bind(this)}/>
                                    </div>
                                    <div className="add-topics">
                                        {
                                            this.state.sectionList[index].quizzes ?
                                                this.state.sectionList[index].quizzes.map((item, index) => {
                                                    return <div className="topic" key={index}>
                                                        <p className="title"><span>{item.title}</span></p>
                                                        <p className="stack"><span>{item.stack}</span></p>
                                                    </div>
                                                }) : ''
                                        }
                                    </div>
                                    <div className="modal">
                                        {
                                            item.type === 'homeworkQuiz' ?
                                                <HomeQuizModal visible={this.state.visible}
                                                               index={index}
                                                               handleOk={(selectTopics, index) => this.handleOk(selectTopics, index)}
                                                               handleCancel={() => this.handleCancel()}/> :
                                                (item.type === 'subjectQuiz' ?
                                                    <SubjectQuizModal visible={this.state.visible}
                                                                      index={index}
                                                                      handleOk={(selectTopics, index) => this.handleOk(selectTopics, index)}
                                                                      handleCancel={() => this.handleCancel()}/> :
                                                    <BasisQuizModal visible={this.state.visible}
                                                                    index={index}
                                                                    handleOk={(selectTopics, index) => this.handleOk(selectTopics, index)}
                                                                    handleCancel={() => this.handleCancel()}/> )
                                        }
                                    </div>
                                </div>
                            </Card>
                        </div>
                    })
                }
                <div className="addSectionCard">
                    <Card>
                        <div className="selectQuizz">
                            <RadioGroup onChange={this.onRadioChange.bind(this)}>
                                <Radio value="1">简单客观题</Radio>
                                <Radio value="2">主观题</Radio>
                                <Radio value="3">编程题</Radio>
                            </RadioGroup>
                        </div>
                        <img src={addButton} alt="add-button" onClick={this.addSection.bind(this)}/>
                    </Card>
                </div>

            </div>
        )
    }
}

export default bottomContent
