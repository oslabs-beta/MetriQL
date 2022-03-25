// here we create the reducer function, like in redux
// we import our actions as variables to avoid bugs from mispelling
import { LOGIN, LOGOUT } from './global-actions';
import url from '../../server/generator/testPSQL';

export const initialCodeState = {
	query:[],
	result: '',
	queryInput: ''
};

export const initialSpeedState = {
  speed: [],
};

export const initialURLState = {
  url: "",
  inputURL: "",
  types: "",
  resolvers: "",
  entryError: false,
  invalidError: false,
  visuals: {},
};

export const initialDisplayState = {
  URIModal: true,
	sidebar: false,
	schema: false,
	history: false,
	visuals: false,
};

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
				...state,
				query:[...state.query, action.payload.query],
				result: action.payload.result
			};
		case 'UPDATE_QUERY_INPUT':
			return {
				...state,
				queryInput: action.payload.queryInput
			}
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

export const displayReducer = (state, action) => {
	switch (action.type) {
		case 'UPDATE_MODAL_DISPLAY':
			return {
				...state,
				URIModal: action.payload
			};
		case 'UPDATE_SIDEBAR_DISPLAY':
			return {
				...state,
				sidebar: action.payload
			};
		case 'UPDATE_SCHEMA_DISPLAY':
			return {
				...state,
				schema: action.payload
			};
		case 'UPDATE_HISTORY_DISPLAY':
			return {
				...state,
				history: action.payload
			};
		case 'UPDATE_D3_DISPLAY':
			return {
				...state,
				visuals: action.payload
			}
	}
};


export const urlReducer = (state, action) => {
	switch (action.type) {
    case "UPDATE_URL":
      return {
        ...state,
        url: action.payload.url,
      };
    case "UPDATE_SCHEMA":
      return {
        ...state,
        types: action.payload.types,
        resolvers: action.payload.resolvers,
		visuals: action.payload.visuals
      };
    case "UPDATE_ENTRY_ERROR":
      return {
        ...state,
        entryError: action.payload,
      };
    case "UPDATE_INVALID_ERROR":
      return {
        ...state,
        invalidError: action.payload,
      };
    case "UPDATE_INPUT_URL":
      return {
        ...state,
        inputURL: action.payload,
      };
  }
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