import routes from './';

const routeSummary = routes.reduce((acc: Array<object>, cur: any) =>{
    if(cur.route){
        return acc.concat(cur.route);
    }
    else{
        return acc.concat(cur)
    }
}, []);

export default routeSummary;