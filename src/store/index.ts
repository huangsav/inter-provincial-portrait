import {createStore} from 'redux';
import {getUser} from './reducer';

export const store = createStore(getUser);

store.subscribe(() => {
    console.log(store.getState());
})