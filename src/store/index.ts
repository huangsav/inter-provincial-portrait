import {createStore} from 'redux';
import reducer from './reducers/reducer';

export const store = createStore(reducer);

store.subscribe(() => {
    console.log(store.getState());
})