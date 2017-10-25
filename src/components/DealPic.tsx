import * as React from 'react';
import { Modal, Button } from 'antd';
//import AvatarEditor from 'react-avatar-editor/AvatarEditor';

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
                    visible={this.state.visible}
                    onOk={this.handleok}
                    onCancel = {this.handlecancel}
                >
                    <div>
                    {/* <AvatarEditor
                        image=""
                        width={250}
                        height={250}
                        border={50}
                        color={[255, 255, 255, 0.6]} //RGBA
                        scale={1.2}
                        rotate={0}
                    /> */}
                    </div>
                </Modal>
            </div>
        )
    }
}

export default DealPicModal;