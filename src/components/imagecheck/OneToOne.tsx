import * as React from 'react';
import OneToOnePic from '../OneToOnePic';
import { Row, Col } from 'antd';

class OneToOne extends React.Component<any, any> {
    render(){
        return (
            <Row>
                <Col span={12}>
                    <OneToOnePic type="A"/>
                </Col>
                <Col span={12}>
                    <OneToOnePic type="B"/>
                </Col>
            </Row>
        );
    }
}

export default OneToOne;