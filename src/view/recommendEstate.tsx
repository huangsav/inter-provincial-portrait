/// <reference path="../d/recommendEstate.d.ts" />
import * as React from 'react';
import { Steps, Button, message } from 'antd';
const Step = Steps.Step;
import FristStep from './FristStep';
import SecondStep from './SecondStep';
import LastStep from './LastStep';

// 引入枚举
import { stepsTitle } from '../enum/recommendEstateEnum';

const steps = [{
    title: stepsTitle.one,
    content: FristStep,
}, {
    title: stepsTitle.two,
    content: SecondStep,
}, {
    title: stepsTitle.three,
    content: LastStep,
}];

const FristStepView = steps[0].content;
const SecondStepView = steps[1].content;
const LastStepView = steps[2].content;

class Estate {
    id?: number;
    content?: string;
}

interface RecommendEstateState {
    current: number;
    estate: Estate;
}

export default class RecommendEstate extends React.Component<any, RecommendEstateState> {
    constructor(props: any) {
        super(props);
        this.state = {
            current: 0,
            estate: {
                id: 1
            }
        };
    }
    next() {
        const current = this.state.current + 1;
        this.setState({ current });
    }
    prev() {
        const current = this.state.current - 1;
        this.setState({ current });
    }
    setValue(val: object|any) {
        let obj = Object.assign(this.state.estate, { content: val.target.value });
        this.setState({
            estate: obj
        });
    }
    changefunc = (val: number) => {
        let obj = Object.assign(this.state.estate, { id: val });
        this.setState({
            estate: obj
        });
    }
    render() {
        const { current } = this.state;
        return (
            <div>
                <h2 className="margin-bottom">推荐楼盘</h2>
                <Steps current={current}>
                    {steps.map(item => <Step key={item.title} title={item.title} />)}
                </Steps>
                <div className="steps-content">
                    {
                        this.state.current === 0 &&
                        <FristStepView changeFunc={this.changefunc} />
                    }
                    {
                        this.state.current === 1 &&
                        <SecondStepView estate={this.state.estate} setValue={this.setValue.bind(this)} />
                    }
                    {
                        this.state.current === 2 &&
                        <LastStepView estate={this.state.estate} />
                    }
                </div>
                <div className="steps-action">
                    {
                        this.state.current < steps.length - 1
                        &&
                        <Button type="primary" onClick={() => this.next()}>下一步</Button>
                    }
                    {
                        this.state.current === steps.length - 1
                        &&
                        <Button type="primary" onClick={() => message.success('推荐成功')}>完成</Button>
                    }
                    {
                        this.state.current > 0
                        &&
                        <Button style={{ marginLeft: 8 }} onClick={() => this.prev()}>
                            上一步
                        </Button>
                    }
                </div>
            </div>
        );
    }
}