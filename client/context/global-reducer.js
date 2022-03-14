// here we create the reducer function, like in redux
// we import our actions as variables to avoid bugs from mispelling
import { LOGIN, LOGOUT } from './global-actions'

export const initialCodeState = {
	result:`{
	data: {
		empireHero: {
			name: "Luke Skywalker"
		},
		jediHero: {
			name: "R2-D2"
		}
	}
}`
};

export const initialSpeedState = {
	// speed: [1, 2, 3, 4],
	speed: [],
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
			console.log('reducer',action.payload);
			return {
				result: action.payload.result
			};
	}
};

export const speedReducer = (state, action) => {
	switch(action.type) {
		case 'UPDATE_SPEED':
			return {
				speed: action.payload.speed
			}
	}
}



export default globalReducer;