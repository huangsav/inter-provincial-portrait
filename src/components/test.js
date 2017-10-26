import * as React from 'react';
import AvatarEditor from 'react-avatar-editor/AvatarEditor';

class test1 extends React.Component{
    render() {
        return (
            <AvatarEditor
            image=""
            width={250}
            height={250}
            border={50}
            color={[255, 255, 255, 0.6]} //RGBA
            scale={1.2}
            rotate={0}
        />
        )
    }
}

export default test1;