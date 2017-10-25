import * as React from 'react';
import { Icon } from 'antd';

export default class SecondStep extends React.Component<any, {}> {
    constructor(props: any) {
        super(props);
    }
    render() {
        return (
            <div>
                <div style={{ fontSize: 30, color: 'red' }}><Icon type="check-circle" />推荐成功</div>
                <div>
                    推荐的楼盘为
                    <span style={{ fontSize: 30, fontWeight: 'bold' }}>{this.props.estate.id}</span>
                    号楼盘
                    <div>
                        备注的内容:
                        <div style={{ fontSize: 30, fontWeight: 'bold' }}>
                            {typeof this.props.estate.content === 'undefined' ? '空' : this.props.estate.content}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}