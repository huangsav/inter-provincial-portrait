import * as React from 'react';
var logo = require('../logo.svg');
import { connect } from 'react-redux';

const Title = () => <h1>Hello</h1>;

class Home extends React.Component<any, {}> {
  constructor(props: any) {
    super(props);
  }
  render() {
    return (
      <div>
        <Title />
        <h2>your reduxName is {this.props.state.name}</h2>
        <img src={logo} style={{ width: 200 }} alt="" />
      </div>
    );
  }
}

const mapStateToProps = (state: any) => {
  return { state: state };
};

export default connect(
  mapStateToProps,
)(Home);