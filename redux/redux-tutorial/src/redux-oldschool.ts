import { createStore } from 'redux';

//Estado inicial
const initialState = {
    counter: {
        value: 0
    }
}

//Reducer(state, action)
function reducer(state = initialState, action) {
    switch(action.type) {
        case 'counter/increment': {
            return {
                ...state,
                counter: {
                    value: state.counter.value + 1,
                }
            };
        }

        case 'counter/incrementAmount': {
            return {
                ...state,
                counter: {
                    value: state.counter.value + action.payload
                }
            }
        }

        default: {
            return state;
        }
    }
}

//Cria a store. Estado global
export const store = createStore(
    reducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);