import * as React from 'react';
import { Radio } from 'antd';
const RadioButton = Radio.Button;
const RadioGroup = Radio.Group;


interface QueryStep1Props {

}

interface QueryStep1State {
    queryType: number;
}

class QueryStep1 extends React.Component<QueryStep1Props, QueryStep1State> {
    constructor(props: any) {
        super(props);
        this.state = {
            queryType: 1
        }
    }
    
    onChange(e: React.FormEvent<HTMLElement>) {
        let event = e.target as HTMLInputElement;
        this.setState({
            queryType: Number.parseInt(event.value)
        })
    }

    render() {
        return (
            <div>
                <RadioGroup onChange={e => this.onChange(e)} defaultValue={this.state.queryType}>
                    <RadioButton value={1}>按身份证查询</RadioButton>
                    <RadioButton value={2}>按姓名查询</RadioButton>
                </RadioGroup>
            </div>
        );
    }
}

export default QueryStep1;