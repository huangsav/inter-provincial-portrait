import * as React from 'react';
import { Layout, Menu, Icon, Dropdown } from 'antd';
const { Header } = Layout;

interface HeaderProps {
    collapsed: boolean;
    toggle: () => void;
}

const cityMenu = (
    <Menu>
        <Menu.Item>
            <a target="_blank" rel="noopener noreferrer"></a>
        </Menu.Item>
        <Menu.Item>
            <a target="_blank" rel="noopener noreferrer"></a>
        </Menu.Item>
        <Menu.Item>
            <a target="_blank" rel="noopener noreferrer"></a>
        </Menu.Item>
    </Menu>
);
const userMenu = (
    <Menu>
        <Menu.Item>
            <a target="_blank" rel="noopener noreferrer">注销</a>
        </Menu.Item>
        <Menu.Item>
            <a target="_blank" rel="noopener noreferrer">修改密码</a>
        </Menu.Item>
    </Menu>
);

export default class HeaderComponent extends React.Component<HeaderProps, {}> {
    render() {
        return (
            <Header className="header">
                <Menu
                    theme="dark"
                    mode="horizontal"
                    style={{lineHeight: '64px'}}
                >
                    <Menu.Item key="1" style={{color: 'white', height: '64px', paddingRight: 0, paddingleft: 8}}>
                        <Icon
                            className="trigger"
                            type={this.props.collapsed ? 'menu-unfold' : 'menu-fold'}
                            onClick={this.props.toggle}
                        />
                    </Menu.Item>
                    <Menu.Item key="2">导航项</Menu.Item>
                    <Menu.Item key="3" style={{float: 'right'}}>
                        <Dropdown overlay={userMenu}>
                            <a className="ant-dropdown-link" href="#">
                                test1
                            </a>
                        </Dropdown>
                    </Menu.Item>
                    <Menu.Item key="4" style={{float: 'right'}}>
                        <Dropdown overlay={cityMenu}>
                            <a className="ant-dropdown0-link" href="#">
                                testName1<Icon type="down"/>
                            </a>
                        </Dropdown>
                    </Menu.Item>
                </Menu>
            </Header>
        )
    }
}