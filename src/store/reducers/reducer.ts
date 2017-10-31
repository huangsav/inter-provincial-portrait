import { combineReducers } from 'redux';

interface Action {
    type: string;
    payload: any;
}

const getUser = (state = {name: ''}, action: Action) => {
    switch(action.type){
        case 'GET_USER1':
            return {name: 'test1', age: 20};
        case 'GET_USER2':
            return {name: 'test2', age: 13};
        case 'GET_USER3':
            return {name: 'test3', age: 43};
        case 'GET_USE44':
            return {name: 'test4', age: 63};
        default:
            return state;
    }
}

const getPic = (state = {url: ''}, action: Action) => {
    const { type, payload } = action;
    switch(type) {
        case 'GET_IMAGE': 
            alert(payload.image);
            return {...state, url: payload.image}
    }
    return state;
}

const reducer = combineReducers({
    getUser,
    getPic
})

export default reducer;