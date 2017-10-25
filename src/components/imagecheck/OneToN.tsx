import * as React from 'react';
import { Collapse, Row, Col,Button,Input ,Select,Radio} from 'antd';
const Panel = Collapse.Panel;
const Option = Select.Option;
import '../../css/defind.css';

class OneToN extends React.Component<any, any> {
    
    render(){
        return(
            <Collapse accordion>
                <Panel header={'第一步 - 请选择要比对的相片'} key="1" className="panelbg">
                <div>
                    <Row>
                        <Col span={6} className="bgcol bgbule">
                            <div>
                                <p className="ptitle">方式一：直接浏览(不做任何处理)</p>
                                <div className="new-file">
                                    <span>上传图片</span>
                                    <div className="filea">
                                        <input type="file" id="newPrisonerImg" className="poyafile"/>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <p className="ptitle">方式二：相片处理(可对照片进行裁剪,框选)</p>
                                <p className="pleft">
                                    <Button type="primary">相片处理</Button>&nbsp;&nbsp;&nbsp;
                                    <Button type="primary">像素工具处理</Button>
                                </p>
                            </div>
                            <div>
                                <p className="ptitle">方式三：通过身份证号码(先查本地常口库,没有再调用公安部接口)</p>
                                <p className="pleft">身份证：<Input size="small" placeholder="small size" className="inputwidth" />&nbsp;&nbsp;<Button type="primary">获取图片</Button></p>
                            </div>
                        </Col>
                        <Col span={8}  className="bgcol bgbule left-right-none">
                            <Row className="paddngtop">
                                <Col span={12} className="text-center"> <div className="imageshow"></div></Col>
                                <Col span={12} className="Rowtext-center">
                                    <p>
                                        <span className="spanwidth">相似度：</span>
                                        <Select defaultValue="80%" style={{ width: 80 }}>
                                            <Option value="50%">50%</Option>
                                            <Option value="60%">60%</Option>
                                        </Select>
                                    </p>
                                    <p>
                                        <span className="spanwidth">返回结果个数：</span>
                                        <Select defaultValue="40" style={{ width: 80 }}>
                                            <Option value="30">30</Option>
                                            <Option value="20">20</Option>
                                        </Select>
                                    </p>
                                    <p>
                                        <Radio>单算发（科理达）</Radio>
                                        <Radio className="margintop">双算法（科理达、博杰）</Radio>
                                    </p>
                                </Col>
                            </Row>
                        </Col>
                        <Col span={10}  className="bgcol bgbule">
                            <p className="ptitle">相片要求</p>
                            <Row>
                                <Col span={12}>
                                    <ul className="requestimg">
                                        <li><span>两眼间距不小于32像素，建议60像素以上。</span></li>
                                        <li><span>中性表情或微笑，眼睛自然睁开。</span></li>
                                        <li><span>被拍摄者的人脸必须为正面头像，人脸上下，左右的倾斜角度不得超过+/-15度。</span></li>
                                        <li><span>图像格式为BMP、JPEG、JPEG2000、三种编码方式的任一种。</span></li>
                                        <li><span>图像文件大小介于30k至350k之间。</span></li>
                                    </ul>
                                </Col>
                                <Col span={12}></Col>
                            </Row>
                        </Col>
                    </Row>
                </div>
                </Panel>
                <Panel header={'第二步 - 请选择要搜索的库类别'} key="2" className="panelbg">
                <p> 提示: 至少选择一个库</p>
                </Panel>
                <Panel header={'第三步 - 请选择比对条件'} key="3" className="panelbg">
                <p> 请选择更精准的比对条件，以加快比对效率。</p>
                </Panel>
            </Collapse>
        );
    }
}

export default OneToN;