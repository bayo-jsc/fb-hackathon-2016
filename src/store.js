import { createStore, combineReducers } from 'redux';

// The User Reducer
const userReducer = function(state = {
  isAuthenticated: false,
}, action) {
	switch (action.type) {
		case 'ADD_USER': {
      return Object.assign({}, state, action.user)
    }

    case 'REMOVE_USER': {
      return {
        isAuthenticated: false
      }
    }

		default: {
			return state
		}
	}
}

// Combine Reducers
const reducers = combineReducers({
  userState: userReducer,
});

const store = createStore(reducers, {

}, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default store