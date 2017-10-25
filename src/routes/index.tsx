import * as React from 'react';
import OneToOne from '../components/imagecheck/OneToOne';
import OneToN from '../components/imagecheck/OneToN';
import { Rate } from 'antd';

export class About extends React.Component<any, any>{
    render() {
        return <div><div>评分</div><Rate allowHalf={true} defaultValue={2.5} /></div>;
    }
}

const routes = [
    {
        name: '深网1：1',
        path: '/ImageCheck/OneToOne',
        component: OneToOne,
        icon: '1:1'
    },
    {
        name: '深网1：N',
        path: '/ImageCheck/OneToN',
        component: OneToN,
        icon: '1:1'
    }
]

export default routes;