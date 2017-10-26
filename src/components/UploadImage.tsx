import * as React from 'react';
import { Upload, Icon, message } from 'antd';
import '../css/UploadImage.css'

interface AvatarState {
    imageUrl: string
}

interface AvatarPic {
    type: string
}

class Avatar extends React.Component<AvatarPic, AvatarState>{
    constructor(props: any){
        super(props);
        this.state = {
            imageUrl: ''
        }
    }
    
    handleChange = (info: any) => {
        getBase64(info.file, (imageUrl: string) => this.setState({ imageUrl }));
    }

    render() {
        const imageUrl = this.state.imageUrl;
        return (
            <Upload 
                className="avatar-uploader"
                name="avatar"
                showUploadList={false}
                action="//jsonplaceholder.typicode.com.posts/"
                beforeUpload={beforeUpload}
                onChange={this.handleChange}
            >
            {
                imageUrl ? 
                    <img src={imageUrl} alt="" className="avatar" /> :
                    <Icon type="plus" className="avatar-uploader-trigger" />
            }
            </Upload>
        )
    }
}

function getBase64(img: File, callback: Function){
    const reader = new FileReader();
    reader.addEventListener('load', () => callback(reader.result));
    reader.readAsDataURL(img);
}

function beforeUpload(file: any) {
    const isImage = file.type === "image/jpeg" || file.type === "image/jpg" || file.type === "image/bmp";
    if(!isImage){
        message.error("只能上传图片！");
        return false;
    }
    const isLt2M = file.size / 1024 / 1024 < 2;
    if(!isLt2M){
        message.error("图片必须小于2MB!");
        return false;
    }

    var filePath = file.name;
    if (!/\.((jpg)|(bmp)|(jpeg))$/ig.test(filePath)) {
        message.error("格式必须jpg,bmp");
        return false;
    }
    else if (/['"#$%&+={}\[\]\<\>\(\)\^*]/.test(filePath)) {
        message.error("文件名不能有特殊字符");
        return false;
    }
    return false;

}

export default Avatar;