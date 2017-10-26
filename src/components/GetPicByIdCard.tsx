import * as React from 'react';
import { Button, Input, Row, Col } from 'antd';
import * as PromiseApi from './promise/api';

interface Pic {
    type: string
}

interface IdCardState {
    idcard: string;
}

class GetPicByIdCard extends React.Component<Pic, IdCardState>{
    constructor(props:any){
        super(props);
        this.state = {
            idcard: ""
        }
    }
    render(){
        return (
            <div>
                <Row type="flex" justify="end">
                    <Col span={3}>身份证{this.props.type}</Col>
                    <Col span={8}><Input size="small" placeholder="身份证号" value={this.state.idcard} onChange={e => this.onChange(e)}/></Col>
                    <Col span={5} offset={1}><Button type="primary" icon="search" onClick={e => this.GetPictureByIdCard()}>获取图片</Button></Col>
                </Row>
            </div>
        )
    }

    onChange (e: React.FormEvent<HTMLElement>) {
        const event = e.target as HTMLInputElement;
        this.setState({ idcard : event.value})
    }
    async GetPictureByIdCard () {
        alert(this.state.idcard);
        let url: string = "https://192.168.16.210:8443/ImageCheck/GetPicStrBySFZ";
        let res = await PromiseApi.remote_get(url + "?sfz=" + this.state.idcard);

        alert(res);
    }
}

export default GetPicByIdCard;