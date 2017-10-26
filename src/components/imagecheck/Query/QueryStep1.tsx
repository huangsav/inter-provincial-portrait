import * as React from 'react';
import { Checkbox, Row, Col } from 'antd';

interface QueryStep1Props {

}

interface QueryStep1State {

}

class QueryStep1 extends React.Component<QueryStep1Props, QueryStep1State> {
    constructor(props: any) {
        super(props);
        this.state = {
            
        }
    }
    render() {
        return (
            <div>
                <Row>
                    <Col>
                        <Checkbox />按身份证查询
                    </Col>
                    <Col>
                        <Checkbox />按姓名查询
                    </Col>
                </Row>
            </div>
        );
    }
}

export default QueryStep1;