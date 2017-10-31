import * as React from 'react';
import OneToOnePic from '../OneToOnePic';
import { Row, Col, Button } from 'antd';
import Score from '../Score';
import '../../css/OneToOne.css';

interface OneToOneProps {
    dispatch: any;
    url: string;
    setUrl(url:string): any;
}

interface OneToOneState {
    scoreVisable: boolean;
    score: string;
    imageA: string;
    imageB: string;
}

class OneToOne extends React.Component<OneToOneProps, OneToOneState> {
    constructor(props: any){
        super(props);
        this.state = {
            scoreVisable: false,
            score: "",
            imageA: "",
            imageB: ""
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
                        <OneToOnePic type="A" image={this.state.imageA}/>
                    </Col>
                    <Col span={12}>
                        <OneToOnePic type="B" image={this.state.imageB}/>
                    </Col>
                </Row>
                <Row>
                    <Col span={12} style={{textAlign: "right"}}>
                        <Button type="primary" onClick={e => this.oneToOneCheck()} style={{marginRight: "5%"}}>比对</Button>
                    </Col>
                    <Col span={12} style={{textAlign: "left"}}>
                        <Button type="primary" onClick={e => this.reset()} style={{marginLeft: "5%"}}>重新开始</Button>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Score visable={this.state.scoreVisable} score={this.state.score}/>
                    </Col>
                </Row>
            </div>
        );
    }
}

// export default connect(
//     (state) => ({url: state.url}),
//     (dispatch) => ({ setUrl: (url: string) => dispatch({type: 'GET_IMAGE', url})})
// )(OneToOne);
export default OneToOne;