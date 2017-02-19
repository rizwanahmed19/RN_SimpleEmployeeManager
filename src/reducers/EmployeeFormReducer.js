import {
	EMPLOYEE_UPDATE,
	EMPLOYEE_CREATE,
	EMPLOYEE_CREATE_START,
	EMPLOYEE_EDIT_UPDATE,
	EMPLOYEE_SAVE_SUCCESS
} from '../actions';

const INITIAL_STATE = {
	name: '',
	phone: '',
	shift: '',
	employeeBtnDisable: false,
	employeeBtnLoading: false
};

export default (state = INITIAL_STATE, action) => {
	switch(action.type) {
		case EMPLOYEE_UPDATE:
			return { ...state, [action.payload.prop]: action.payload.value};
		case EMPLOYEE_EDIT_UPDATE:
			return {
				...state, 
				name: action.payload.name, 
				phone: action.payload.phone, 
				shift: action.payload.shift
			};
		case EMPLOYEE_CREATE_START:
			return {...state, employeeBtnLoading: true, employeeBtnDisable: true};
		case EMPLOYEE_CREATE:
		case EMPLOYEE_SAVE_SUCCESS:
			return INITIAL_STATE;
		default:
			return state;
	}
}