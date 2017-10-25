import * as React from 'react';
import OneToOne from '../components/imagecheck/OneToOne'
import BannerManager from '../view/bannerManager';
import recommendEstate from '../view/recommendEstate';
import Home from '../view/home';
import { Rate } from 'antd';

export class About extends React.Component<any, any>{
    render() {
        return <div><div>评分</div><Rate allowHalf={true} defaultValue={2.5} /></div>;
    }
}

const routes = [
    {
        name: '首页',
        path: '/',
        component: Home,
        icon: 'home'
    },
    {
        name: '深网1：1',
        path: '/ImageCheck/OneToOne1',
        component: OneToOne,
        icon: '1:1'
    },
    {
        name: '前台网站设置',
        icon: 'flag',
        route: [
            {
                path: '/recommendEstate',
                component: recommendEstate,
                name: '楼盘推荐管理',
                icon: 'exception'
            },
            {
                path: '/bannerManager',
                component: BannerManager,
                name: '广告运营管理',
                icon: 'shop'
            }
        ],
    },
    {
        name: '其他',
        route: [
            {
                path: '/about',
                component: About,
                name: '关于'
            }
        ],
    },
    {
        name: 'Image',
        rute: [
            {
                path: '/images/:name',
                name: 'Image'
            }
        ]
    }
]

export default routes;