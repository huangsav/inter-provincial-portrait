import * as React from 'react';
import { Modal, Button } from 'antd';
import AvatarEditor from 'react-avatar-editor';



interface Pic {
    type: string
}

interface displayState {
    visible: boolean;
}

class DealPicModal extends React.Component<Pic, displayState>{
    constructor(props:any){
        super(props);
        this.state = {
            visible: false
        };
    }

    showModal = () => {
        this.setState({
                visible: true
        });
    }

    handleok = (e: React.MouseEvent<HTMLElement>) => {
        console.log(e);
        this.setState({
            visible: false
        });
    }

    handlecancel = (e: React.MouseEvent<HTMLElement>) => {
        console.log(e);
        this.setState({
            visible: false
        });
    }

    render() {
        return (
            <div>
                <Button type="primary" onClick={this.showModal}>相片处理{this.props.type}</Button>
                <Modal
                    title="相片处理"
                    width="500px"
                    visible={this.state.visible}
                    onOk={this.handleok}
                    onCancel = {this.handlecancel}

                >
                    <div>
                    <AvatarEditor
                        image="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1508991407898&di=0b956f5176fc25048666d67449f48dd0&imgtype=0&src=http%3A%2F%2Fc.hiphotos.baidu.com%2Fimage%2Fpic%2Fitem%2F09fa513d269759eea79bc50abbfb43166c22df2c.jpg"
                        width={250}
                        height={250}
                        border={50}
                        color={[255, 255, 255, 0.6]} //RGBA
                        scale={1.2}
                        rotate={0}
                    />
                    </div>
                </Modal>
            </div>
        )
    }
}

export default DealPicModal;