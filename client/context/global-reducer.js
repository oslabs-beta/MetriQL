// here we create the reducer function
// we import our actions as variables to avoid bugs from mispelling

export const initialCodeState = {
	query: [],
	result: '',
	queryInput: ''
};

export const initialSpeedState = {
	speed: [],
	firstQuery: true,
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

export const codeReducer = (state, action) => {
	switch (action.type) {
		case 'UPDATE_RESULT':
			return {
				...state,
				query: [...state.query, action.payload.query],
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
			console.log(action.payload.speed);
			return {
				...state,
				speed: action.payload.speed
			};
		case 'UPDATE_FIRST_QUERY':
			return {
				...state,
				firstQuery: action.payload
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

		case 'UPDATE_SCHEMA':
			return {
				...state,
				types: action.payload.types,
				resolvers: action.payload.resolvers
			}

	}
}
