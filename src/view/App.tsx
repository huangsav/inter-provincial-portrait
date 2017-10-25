import * as React from 'react';
import '../css/App.css';
import {
  Route,
  Switch,
  Redirect
} from 'react-router-dom';
import allRoutes from '../routes/routes';
import HeaderComponent from '../components/HeaderComponent';
import MenuComponent from '../components/MenuComponent';
import BreadCrumbComponent from '../components/BreadCrumbComponent';
import { userAction } from '../store/actions';
import { connect } from 'react-redux';
import { Layout } from 'antd';
const { Content, Sider } = Layout;

interface Mode {
  mode: string;
  collapsed: boolean;
}
class App extends React.Component<any, Mode> {
  constructor(props: any) {
    super(props);
    this.state = {
      mode: 'inline',
      collapsed: false
    };
    // 把store中的用户信息更新为user1的状态
    this.props.dispatch(userAction('GET_USER1'));
    // 窗口响应事件
    window.addEventListener('resize', this.onResize);
  }
  toggle = () => {
    let coll = !this.state.collapsed;
    this.setState({
      collapsed: coll,
      mode: coll ? 'vertical' : 'inline',
    });
  }
  onResize = () => {
    isDesktop() ? this.setState({
      collapsed: false,
      mode: 'inline',
    }) : this.setState({
      collapsed: true,
      mode: 'vertical',
    });
  }
  render() {
    return (
      <Layout className="layout">
        <Sider
          trigger={null}
          collapsible={true}
          collapsed={this.state.collapsed}
        >
          <div className="logo" />
          <MenuComponent mode={this.state.mode} />
        </Sider>
        <Layout className="bg-white">
          <HeaderComponent toggle={this.toggle} collapsed={this.state.collapsed} />
          <Content style={{ background: '#fff', padding: 24, margin: 0, minHeight: '100%' }}>
            <BreadCrumbComponent />
            <Switch>
              {
                allRoutes.map((item: object, i: number) =>
                  <Route key={i} {...item} />
                )
              }
              <Redirect from="*" to="/" />
            </Switch>
          </Content>
        </Layout>
      </Layout>
    );
  }
}

function isDesktop() {
  return window.innerWidth > 993;
}

const mapStateToProps = (state: any) => {
  return { state: state };
};

export default connect(
  mapStateToProps,
)(App);
