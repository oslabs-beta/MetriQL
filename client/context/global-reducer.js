// here we create the reducer function, like in redux
// we import our actions as variables to avoid bugs from mispelling
import { LOGIN, LOGOUT } from './global-actions';
import url from '../../server/generator/testPSQL';

export const initialCodeState = {
	result: ''
};

export const initialSpeedState = {
	// speed: [1, 2, 3, 4],
	speed: [],
}

export const initialURLState = {
	// url: url.URI,
	url: '',
	types: '',
	resolvers: ''
}

const globalReducer = (state, action) => {
	switch (action.type) {
		case LOGIN:
			return {
				...state,
				isLoggedIn: true,
				username: action.payload.username,
				password: action.payload.password
			}
		case LOGOUT:
			return {
				...state,
				isLoggedIn: false,
				username: '',
				password: ''
			}

		default:
			return state;
	}
}

export const codeReducer = (state, action) => {
	switch (action.type) {
		case 'UPDATE_RESULT':
			return {
				result: action.payload.result
			};
	}
};

export const speedReducer = (state, action) => {
	switch (action.type) {
		case 'UPDATE_SPEED':
			return {
				speed: action.payload.speed
			}
	}
}

export const urlReducer = (state, action) => {
	switch (action.type) {
		case 'UPDATE_URL':
			return {
				...state,
				url: action.payload.url
	}
		case 'UPDATE_SCHEMA':
			return {
				...state,
				types: action.payload.types,
				resolvers: action.payload.resolvers
			}
		}
}


export default globalReducer;