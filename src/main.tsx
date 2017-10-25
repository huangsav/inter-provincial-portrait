import * as React from 'react';
import { Route } from 'react-router-dom';
import App from './App';
import 'antd/dist/antd.css';
// import OneToOne from './components/imagecheck/OneToOne';
export default class Main extends React.Component<{}, {}>{
    render() {
        return (
            <div className="layout">
                <Route path="/" component={App as any}/>
                {/* <Route path="/ImageCheck/OneToOne" component={OneToOne as any}/> */}
            </div>
        )
    }
}