import * as React from 'react';
import { Checkbox, Row, Col } from 'antd';

interface ScoreProps {
    score: string,
    visable: boolean
}

interface ScoreState {
    sameOne: boolean;
    msg: string
}

class Score extends React.Component<ScoreProps, ScoreState>{
    constructor(props: any){
        super(props);
        this.state = {
            sameOne: false,
            msg: '由于相似度小于系统设定阀值[80%],系统未能确认是同人,若两张像片是同人,请打上勾!'
        }
    }

    CheckboxChange(e: React.FormEvent<HTMLElement>){
        let event = e.target as HTMLInputElement;
        if(event.checked){
            this.setState({
                sameOne: true,
                msg: '您已确认两张像片属于同人!'
            })
        }
        else{
            this.setState({
                sameOne: false,
                msg: '您已确认两张像片不属于同人!'
            })
        }
    }

    render(){
        return (
            <div style={{display: this.props.visable? "" : "none"}}>
                <Row>
                    <Col>
                <span>相似度为：{this.props.score}</span>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        是否确认比中：<Checkbox onChange={e => this.CheckboxChange(e) }/>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <span>{this.state.msg}</span>
                    </Col>
                </Row>
            </div>
        )
    }
}

export default Score;