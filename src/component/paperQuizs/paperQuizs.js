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
            sectionList: []
        }
    }

    showQuizModal(index) {
        this.state.sectionList[index].modalVisible = true;
        this.setState({
            sectionList: this.state.sectionList
        })
    }

    handleOk(selectTopics, index) {
        this.state.sectionList[index]['quizzes'].push(selectTopics);
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
            sectionList: sectionList
        })
    }

    onDeleteSectionQuiz(index, quizzes) {
        const sectionList = this.state.sectionList;
        quizzes.splice(index, 1);
        this.setState({
            sectionList: sectionList
        })
    }

    //TODO 修改sectionQuiz
    onModifySectionQuiz() {

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
                                            this.state.sectionList[index].quizzes ?
                                                this.state.sectionList[index].quizzes.map((item, itemIndex) => {
                                                    return <div className="topic" key={itemIndex}>
                                                        <p className="title"><span>{item.title}</span></p>
                                                        <p className="stack"><span>{item.stack}</span></p>
                                                        <p className="delete">
                                                            <Icon type="delete"
                                                                  onClick={this.onDeleteSectionQuiz.bind(this, itemIndex, this.state.sectionList[index].quizzes)}/>
                                                        </p>
                                                        <p className="modify">
                                                            <Icon type="setting"
                                                                  onClick={this.onModifySectionQuiz.bind(this, itemIndex, this.state.sectionList[index].quizzes)}/>
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
                                                      index={index}/>
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
