import {
	EMAIL_CHANGED,
	PASSWORD_CHANGED,
	LOGIN_USER_SUCCESS,
	LOGIN_USER_FAIL, 
	LOGIN_USER
} from '../actions';

const INITIAL_STATE = { 
	email: '',
	password: '',
	user: null,
	error: '',
	loading: false,
	disable: false
};

export default (state = INITIAL_STATE, action) => {
	switch(action.type) {
		case EMAIL_CHANGED:
			return { ...state, email: action.payload };
		case PASSWORD_CHANGED:
			return { ...state, password: action.payload };
		case LOGIN_USER:
			return { ...state, error: '', loading: true, disable: true}
		case LOGIN_USER_SUCCESS:
			return { ...state, user: action.payload, ...INITIAL_STATE};
		case LOGIN_USER_FAIL:
			return { ...state, error: 'Authentication Failed.', password: '', loading: false, disable: false};
		default:
			return state;
	}
}