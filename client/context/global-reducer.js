// here we create the reducer function, like in redux
// we import our actions as variables to avoid bugs from mispelling
import { LOGIN, LOGOUT } from './global-actions';
import url from '../../server/generator/testPSQL';

export const initialCodeState = {
	query:[],
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

export const initialStatusState = {
	isLoggedin: false,
	username: ''
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
		case OPEN_LOGIN:
			return {
				...state,
				open: true
			}

		default:
			return state;
	}
}

export const codeReducer = (state, action) => {
	switch (action.type) {
		case 'UPDATE_RESULT':
			return {
				query:[...state.query, action.payload.query],
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
export const statusReducer = (state, action) => {
	switch(action.type) {
		case 'UPDATE_STATUS':
			return {
				isLoggedIn: action.payload.isLoggedin,
				username: action.payload.username
			}
	}
}



export default globalReducer;