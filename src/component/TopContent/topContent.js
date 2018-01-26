import React, {Component} from 'react'
import {connect} from 'react-redux';
import {Form, Input, Checkbox, InputNumber, Select} from 'antd'
import * as programActions from '../../actions/program';

import './topContent.less'

const FormItem = Form.Item;
const {TextArea} = Input;
const Option = Select.Option;

class TopContent extends Component {

    constructor(props) {
        super(props);
        this.state = {
            disabled: true,
        }
    }

    componentDidMount() {

    }

    onHandleChange() {
        const current = this.state.disabled;
        this.setState({
            disabled: !current
        })
    }

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
        const {disabled} = this.state;
        const {program} = this.props;
        return (
            <div className="top-content">
                <Form name="myForm">
                    <FormItem
                        {...formItemLayout}
                        label="试卷名称"
                    >
                        {getFieldDecorator('name', {
                            rules: [{
                                required: true, message: '请输入试卷名称!',
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
                                required: true, message: '请输入试卷描述!',
                            }],
                        })(
                            <TextArea placeholder="试卷描述"/>
                        )}
                    </FormItem>
                    <FormItem
                        {...formItemLayout}
                        label="program">
                        <Select className="form-control">
                            {
                                program.map((item, index) => {
                                    return <Option value={item} key={index}>{item}</Option>

                                })
                            }
                        </Select>
                    </FormItem>
                    <FormItem
                        {...formItemLayout}
                        label="逻辑题"
                    >
                        <Checkbox onChange={this.onHandleChange.bind(this)}/>
                        <div className="inputs-group">
                            <span className="type">简单</span>
                            <InputNumber min={1} max={10} size="large" disabled={disabled}/>
                            <span className="type">一般</span>
                            <InputNumber min={1} max={10} size="large" disabled={disabled}/>
                            <span className="type">困难</span>
                            <InputNumber min={1} max={10} size="large" disabled={disabled}/>
                        </div>

                    </FormItem>

                </Form>
            </div>
        )
    }

}

const mapStateToProps = state => ({program: state.program});
const mapDispatchToProps = dispatch => ({
    getProgram: () => dispatch(programActions.getProgram())
});

const WrappedRegistrationForm = Form.create()(TopContent);
export default connect(mapStateToProps, mapDispatchToProps)(WrappedRegistrationForm);