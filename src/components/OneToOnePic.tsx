import * as React from 'react';
import { Row, Col } from 'antd';
import GetPicByIdCard from './GetPicByIdCard';
import UploadImage from './UploadImage';
import DealPicModal from './DealPic';
import '../css/OneToOnePic.css'

interface Pic {
    type: string;
    image: any;
}

class OneToOnePic extends React.Component<Pic, any>{
    constructor(props: any){
        super(props);
    }
    ocxPreviewImg() {

    }

    render() {
        return (
            <div>
                <Row>
                    <Col offset={4}>方式一:直接浏览(不做任何处理)</Col>
                </Row>
                <Row type="flex" justify="center">
                    <Col>
                        <UploadImage type={this.props.type}/>
                    </Col>
                </Row>
                <Row>
                    <Col offset={4}>方式二:相片处理(可对照片进行裁剪,框选)</Col>
                </Row>
                <Row type="flex" justify="end">
                    <Col className="buttonCol">
                        <DealPicModal type={this.props.type} image={this.props.image}></DealPicModal>
                    </Col>
                </Row>
                <Row>
                    <Col offset={4}>方式三:通过身份证号码(先查本地常口库,没有再调用公安部接口)</Col>
                </Row>
                <Row type="flex" justify="end">
                    <Col span={12} className="buttonCol">
                        <GetPicByIdCard type={this.props.type}/>
                    </Col>
                </Row>
            </div>
        );
    }
}
export default OneToOnePic;