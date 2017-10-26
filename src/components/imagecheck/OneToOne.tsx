import * as React from 'react';
import OneToOnePic from '../OneToOnePic';
import { Row, Col, Button } from 'antd';
import Score from '../Score';

interface OneToOneProps {

}

interface OneToOneState {
    scoreVisable: boolean,
    score: string
}

class OneToOne extends React.Component<OneToOneProps, OneToOneState> {
    constructor(props: any){
        super(props);
        this.state = {
            scoreVisable: false,
            score: ""
        }
    }

    oneToOneCheck() {
        this.setState({
            scoreVisable: true
        });
    }

    reset() {

    }

    render() {
        return (
            <div>
                <Row>
                    <Col span={12}>
                        <OneToOnePic type="A"/>
                    </Col>
                    <Col span={12}>
                        <OneToOnePic type="B"/>
                    </Col>
                </Row>
                <Row>
                    <Col span={12}>
                        <Button type="primary" onClick={e => this.oneToOneCheck()}>比对</Button>
                    </Col>
                    <Col span={12}>
                        <Button type="primary" onClick={e => this.reset()}>重新开始</Button>
                    </Col>
                </Row>
                <Row>
                    <Col style={{textAlign: "centor"}}>
                        <Score visable={this.state.scoreVisable} score={this.state.score}/>
                    </Col>
                </Row>
            </div>
        );
    }
}

export default OneToOne;