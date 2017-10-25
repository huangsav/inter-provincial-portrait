interface Action {
    type: string;
}

export const getUser = (state = {name: ''}, action: Action) => {
    switch(action.type){
        case 'GET_USER1':
            return {name: 'test1', age: 20};
        case 'GET_USER2':
            return {name: 'test2', age: 13};
        case 'GET_USER3':
            return {name: 'test3', age: 43};
        case 'GET_USER2':
            return {name: 'test4', age: 63};
        default:
            return state;
    }
}