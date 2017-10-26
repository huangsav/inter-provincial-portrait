import * as React from 'react';
import QueryStep1 from './Query/QueryStep1';
interface QueryProps {
    
}

interface QueryState {

}

class Query extends React.Component<QueryProps, QueryState> {
    constructor(props: any){
        super(props);

        this.state = {

        }
    }

    render() {
        return (
            <QueryStep1 />
        );
    }
}

export default Query;