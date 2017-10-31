import * as React from 'react';
import { Modal, Button } from 'antd';
import AvatarEditorApp from './AvatarEditorApp';

interface Pic {
    type: string;
    image: any;
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
        alert(this.props.image);
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
                    width="600px"
                    visible={this.state.visible}
                    onOk={this.handleok}
                    onCancel = {this.handlecancel}

                >
                    <div>
                    <AvatarEditorApp image={this.props.image}/>
                    </div>
                </Modal>
            </div>
        )
    }
}

export default DealPicModal;