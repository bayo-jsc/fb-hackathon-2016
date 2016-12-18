import { createStore, combineReducers } from 'redux';

// // The User Reducer
// const userReducer = function(state = {
  
// }, action) {
// 	switch (action) {
// 		case 'ADD_USER': {
//       newState = {...state}
//       Object.assign(newState, action.user)
//       return newState
//     }

//     case 'REMOVE_USER': {
//       return {}
//     }
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

const imageReducer = (state = {
  images: []
}, action) => {
  switch (action.type) {
    case 'ADD_IMAGE': {
      return {
        images: state.images.concat(action.images),
      }
    }

    case 'REMOVE_IMAGE': {
      let images = state.images.slice()

      return {
        images: images.slice(action.index, 1)
      }
    }

    case 'CHANGE_CAPTION': {
      let images = state.images.slice()
      images[action.index].caption = action.caption

      return {
        images,
      }
    }

    case 'RESET': {
      return {
        images: []
      }
    }

    default: {
      return state
    }
  }
}

// // Combine Reducers
const reducers = combineReducers({
  userState: userReducer,
  image: imageReducer,
});

const store = createStore(reducers, {

}, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());


export default store