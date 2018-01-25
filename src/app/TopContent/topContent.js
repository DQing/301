import React, {Component} from 'react'
import {Form, Input, Checkbox} from 'antd'

import './topContent.less'

const FormItem = Form.Item;
const {TextArea} = Input;

class TopContent extends Component {

    constructor(props) {
        super(props);
        this.state = {
            easy: '',
            general: '',
            difficult: '',
        }
    }

    onHandleChange() {
        document.getElementsByClassName("inputs-group")[0].removeAttribute("hidden")
    }

    onNumberChange = (e) => {

        const reg = /^-?(0|[1-9][0-9]*)(\.[0-9]*)?$/;
        const value = document.getElementsByName(e)[0].value;
        if ((!isNaN(value) && reg.test(value) && e === 'easy') || value === '') {
            this.setState({easy: value})
        } else if ((!isNaN(value) && reg.test(value) && e === 'general') || value === '') {
            this.setState({general: value})
        } else if ((!isNaN(value) && reg.test(value) && e === 'difficult') || value === '') {
            this.setState({difficult: value})
        }
    };

    render() {

        const {getFieldDecorator} = this.props.form;
        const formItemLayout = {
            labelCol: {
                xs: {span: 24},
                sm: {span: 4, offset: 4},
            },
            wrapperCol: {
                xs: {span: 24},
                sm: {span: 10},
            },
        };
        return (
            <div className="top-content">
                <Form name="myForm">
                    <FormItem
                        {...formItemLayout}
                        label="试卷名称"
                    >
                        {getFieldDecorator('name', {
                            rules: [{
                                max: true, message: '试卷名称长度不能超过32个字符'
                            }],
                        })(
                            <Input placeholder="请输入试卷名称"/>
                        )}
                    </FormItem>
                    <FormItem
                        {...formItemLayout}
                        label="试卷描述"
                    >
                        {getFieldDecorator('examDescription', {
                            rules: [{
                                max: true, message: '试卷描述长度不能超过255个字符'
                            }],
                        })(
                            <TextArea placeholder="请输入试卷描述"/>
                        )}
                    </FormItem>
                    <FormItem
                        {...formItemLayout}
                        label="逻辑题"
                    >
                        <Checkbox onChange={this.onHandleChange}/>
                        <div className="inputs-group" hidden>
                            <span className="type">简单</span>
                            <Input size="large" name="easy"
                                   onChange={this.onNumberChange.bind(this, 'easy')}
                                   value={this.state.easy}/>
                            <span className="type">一般</span>
                            <Input size="large" name="general"
                                   onChange={this.onNumberChange.bind(this, 'general')}
                                   value={this.state.general}/>
                            <span className="type">困难</span>
                            <Input size="large" name="difficult"
                                   onChange={this.onNumberChange.bind(this, 'difficult')}
                                   value={this.state.difficult}/>
                        </div>

                    </FormItem>

                </Form>
            </div>
        )
    }

}

const WrappedRegistrationForm = Form.create()(TopContent);
export default WrappedRegistrationForm;