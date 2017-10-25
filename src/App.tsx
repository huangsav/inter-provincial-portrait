import * as React from 'react';
import { Route, Switch } from 'react-router-dom';
import routes from './routes/routes';
import './css/App.css';
import HeaderComponent from './components/HeaderComponent';
import MenuComponent from './components/MenuComponent';
import BreadCrumComponent from './components/BreadCrumbComponent';
import { userAction } from './store/actions';
import{ connect } from 'react-redux';
import { Layout } from 'antd';
const { Content, Sider } = Layout;

interface Mode {
  mode: string;
  collapsed: boolean;
}

class App extends React.Component<any, Mode> {
  constructor(props: any){
    super(props);
    this.state = {
      mode: 'inline',
      collapsed: false
    };

    this.props.dispatch(userAction('GET_USER1'));
    window.addEventListener('resize', this.onResize);
  }
  toggle = () => {
    let coll = !this.state.collapsed;
    this.setState({
      collapsed: coll,
      mode: coll ? 'vertical' : 'inline'
    });
  }
  onResize = () => {
    isDesktop() ? this.setState({
      collapsed: false,
      mode: 'inline'
    }) : this.setState({
      collapsed: true,
      mode: 'vertical'
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
          <div className="logo"/>
          <MenuComponent mode={this.state.mode} />
        </Sider>
        <Layout className="bg-white">
          <HeaderComponent toggle={this.toggle} collapsed={this.state.collapsed} />
          <Content style={{ background: '#fff', padding: 24, margin: 0, minHeight: '100%' }}>
            <BreadCrumComponent />
            <Switch>
              {
                routes.map((item: object, i: number) => {
                  <Route key={i}{...item} />
                })
              }
            </Switch>
          </Content>
        </Layout>
      </Layout>
    );
  }
}

const isDesktop = () => {
  return window.innerWidth > 993;
}

const mapStateToProps = (state: any) => {
  return { state: state };
}

export default connect(
  mapStateToProps,
)(App);
