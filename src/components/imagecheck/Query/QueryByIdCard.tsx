import * as React from 'react';
import { Input, Row, Col } from 'antd';
const Search = Input.Search;

interface QueryByIdCardState {
    idcard: string;
}

class QueryByIdCard extends React.Component<any, QueryByIdCardState> {
    constructor(props: any) {
        super(props);
        this.state = {
            idcard: ''
        }
    }

    query() {
        
    }
    
    render() {
        return (
            <div>
                <Row>
                    <Col>
                        <span>*</span>身份证号：
                        <Search
                            placeholder="input id card"
                            style={{width: 200}}
                            onSearch={e => this.query()}
                        />
                    </Col>
                </Row>
                <Row>  
                    <Col>
                        说明: 输入15位或者18位完整身份证号
                    </Col>
                </Row>
            </div>
        );
    }
}

export default QueryByIdCard;