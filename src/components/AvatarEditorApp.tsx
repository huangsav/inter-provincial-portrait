import * as React from 'react';
import { Row, Col, Slider, Checkbox, InputNumber, Button } from 'antd';
import AvatarEditor from 'react-avatar-editor';

interface AvatarEditorAppProps {
    image: any;
}

interface Position {
    x: number;
    y: number;
}

interface AvatarEditorAppState {
    allowZoomOut: boolean;
    image: any;
    position: Position;
    width: number;
    height: number;
    border: number | [number];
    borderRadius: number;
    color: number[],
    scale: number;
    rotate: number;
    preview: any;
}

class AvatarEditorApp extends React.Component<AvatarEditorAppProps, AvatarEditorAppState> {
    constructor(props: any){
        super(props);
        this.state = {
            allowZoomOut: false,
            image: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1508991407898&di=0b956f5176fc25048666d67449f48dd0&imgtype=0&src=http%3A%2F%2Fc.hiphotos.baidu.com%2Fimage%2Fpic%2Fitem%2F09fa513d269759eea79bc50abbfb43166c22df2c.jpg",
            position: { x: 0.5, y: 0.5 },
            width: 250,
            height: 250,
            border: 50,
            borderRadius: 0,
            color: [255, 255, 255, 0.6],
            scale: 1.2,
            rotate: 0,
            preview: null
        }
    }

    componentWillMount() {

    }

    handleScale(num: number|[number]) {
        if(typeof(num) === "number")
        {
            this.setState({ scale: num });
        }
        else{
            this.setState({ scale: num[1] - num[0] });
        }
    }

    handleAllowZoomOut(e: React.FormEvent<HTMLElement>){
        let tg = e.target as HTMLInputElement;
        this.setState({ allowZoomOut: tg.checked });
    }

    handleBorderRadius(num: number|[number]) {
        if(typeof(num) === "number")
        {
            this.setState({ borderRadius: num });
        }
        else{
            this.setState({ borderRadius: num[1] - num[0] });
        }
    }

    handleWidth = (e: number|string) => {
        if(typeof(e) === "number")
            this.setState({ width: e })
        else
            this.setState({ width: Number.parseFloat(e) })
      }
    
    handleHeight = (e: number|string) => {
        if(typeof(e) === "number")
        this.setState({ height: e })
    else
        this.setState({ height: Number.parseFloat(e) })
    }

    handleXPosition = (e: number|[number]) => {
        let x: number = 0.5;
        if(typeof(e) === "number"){
            x = e
        }
        else{
            x = e[1] - e[0];
        }
       
        this.setState({ position: { ...this.state.position, x } })
    }
    
    handleYPosition = (e: number|[number]) => {
        let y: number = 0.5;
        if(typeof(e) === "number"){
            y = e
        }
        else{
            y = e[1] - e[0];
        }
        this.setState({ position: { ...this.state.position, y } })
    }

    rotateLeft = (e: React.FormEvent<HTMLElement>) => {
        e.preventDefault();

        this.setState({
            rotate: this.state.rotate - 90
        })
    }

    rotateRight = (e: React.FormEvent<HTMLElement>) => {
        e.preventDefault();
        
        this.setState({
            rotate: this.state.rotate + 90
        })
    }

    handleSave = (data: any) => {
        // const img = this.editor
    }

    // setEditorRef = (editor: AvatarEditor) => {
    //     if (editor) 
    //         this.editor = editor;
    // }

    render() {
        return (
            <div>
                <AvatarEditor
                    image={this.props.image}
                    position={this.state.position}
                    width={this.state.width}
                    height={this.state.height}
                    border={this.state.border}
                    borderRadius={this.state.borderRadius}
                    color={this.state.color} //RGBA
                    scale={this.state.scale}
                    rotate={this.state.rotate}
                />
                <Row>
                    <Col>
                        Zoom: 
                        <Slider onChange={e => this.handleScale(e) } min={this.state.allowZoomOut ? 0.1 : 1} max={2} step={0.01} defaultValue={1} />
                    </Col>
                </Row>
                <Row>
                    <Col>
                        {'允许图片小于相框'}
                        <Checkbox 
                            onChange={e => this.handleAllowZoomOut(e)}
                            checked={this.state.allowZoomOut}
                        />
                    </Col>
                </Row>
                <Row>
                    <Col>
                        Border radius: 
                        <Slider onChange={e => this.handleBorderRadius(e)} min={0} max={100} step={1} defaultValue={0} />
                    </Col>
                </Row>
                <Row>
                    <Col>
                        Avatar Width: 
                        <InputNumber onChange={this.handleWidth} min={50} max={400} step={10} value={this.state.width}/>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        Avatar Height: 
                        <InputNumber onChange={this.handleHeight} min={50} max={400} step={10} value={this.state.height}/>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        X Position: 
                        <Slider onChange={this.handleXPosition} min={0} max={1} step={0.01} value={this.state.position.x}/>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        Y Position: 
                        <Slider onChange={this.handleYPosition} min={0} max={1} step={0.01} value={this.state.position.y}/>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        Rotate: 
                        <Button onClick={this.rotateLeft}>Left</Button>
                        <Button onClick={this.rotateRight}>Right</Button>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Button type='primary' onClick={this.handleSave}>预览</Button>
                    </Col>
                </Row>
            </div>
        );
    }
}

export default AvatarEditorApp;