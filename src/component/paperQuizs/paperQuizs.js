import React, {Component} from 'react';
import {Input, Card, Icon, Radio} from 'antd'
import '../../style/paperQuizs.less'
import addButton from '../../static/addButton.png';
import * as Type from '../../constant/quiz-type';
import SectionModal from './quizModal/sectionModal';


const RadioGroup = Radio.Group;


class bottomContent extends Component {

    constructor(props) {
        super(props);
        this.state = {
            quizTitle: '',
            quizType: '',
            input: false,
            sectionList: [],
            isModify: false,
            itemIndex: 0
        }
    }

    showQuizModal(index) {
        this.state.sectionList[index].modalVisible = true;
        this.setState({
            sectionList: this.state.sectionList
        })
    }

    handleOk(selectTopics, index) {
        const itemIndex = this.state.itemIndex;
        if (this.state.isModify) {
            this.state.sectionList[index]['quizzes'][itemIndex] = selectTopics;
            this.state.isModify = false;
        } else {
            this.state.sectionList[index]['quizzes'].push(selectTopics);
        }
        this.state.sectionList[index].modalVisible = false;
        this.setState({
            sectionList: this.state.sectionList
        })
    }

    handleCancel(index) {
        this.state.sectionList[index].modalVisible = false;
        this.setState({
            sectionList: this.state.sectionList
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
            sectionList: sectionList,
            isModify: true
        })
    }

    onDeleteSectionQuiz(index, quizzes) {
        const sectionList = this.state.sectionList;
        quizzes.splice(index, 1);
        this.setState({
            sectionList: sectionList
        })
    }

    onModifySectionQuiz(index, section) {
        section.modalVisible = true;
        this.setState({
            sectionList: this.state.sectionList,
            isModify: true,
            itemIndex: index
        })
    }

    addSection() {
        const {quizTitle, quizType} = this.state;

        const section = {
            "type": quizType,
            "quizTitle": quizTitle,
            "quizzes": [],
            "modalVisible": false
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
                            <Card title={
                                input ? <Input type="text" id="input-title"
                                               onChange={this.inputChange.bind(this, index)}
                                               onBlur={this.inputOnBlur.bind(this)}
                                               value={item.quizTitle}/> :
                                    <span>
                                        <span>{item.quizTitle}</span>
                                        <Icon type="form" onClick={this.onClickForm.bind(this)}/>
                                    </span>}

                                  extra={<Icon type="delete" onClick={this.onDeleteSection.bind(this, index)}/>}>

                                <div className="topic-list">
                                    <div className="add-button">
                                        <img src={addButton} alt="add-button"
                                             onClick={this.showQuizModal.bind(this, index)}/>
                                    </div>
                                    <div className="add-topics">
                                        {
                                            item.quizzes ?
                                                item.quizzes.map((quiz, itemIndex) => {
                                                    return <div className="topic" key={itemIndex}>
                                                        <p className="title"><span>{quiz.title}</span></p>
                                                        <p className="stack"><span>{quiz.stack}</span></p>
                                                        <p className="delete">
                                                            <Icon type="delete"
                                                                  onClick={this.onDeleteSectionQuiz.bind(this, itemIndex, item.quizzes)}/>
                                                        </p>
                                                        <p className="modify">
                                                            <Icon type="setting"
                                                                  onClick={this.onModifySectionQuiz.bind(this, itemIndex, item)}/>
                                                        </p>
                                                    </div>
                                                }) : ''
                                        }
                                    </div>
                                    <div className="modal">
                                        <SectionModal visible={item.modalVisible}
                                                      quizType={item.type}
                                                      sectionList={this.state.sectionList}
                                                      handleOk={(selectTopics, index) => this.handleOk(selectTopics, index)}
                                                      handleCancel={(index) => this.handleCancel(index)}
                                                      index={index}
                                                      itemIndex={this.state.itemIndex}
                                                      isModify={this.state.isModify}/>
                                    </div>
                                </div>
                            </Card>
                        </div>
                    })
                }
                <div className="addSectionCard">
                    <Card>
                        <div className="selectQuiz">
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
