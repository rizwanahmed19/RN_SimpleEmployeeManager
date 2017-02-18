import {
	EMPLOYEE_UPDATE,
	EMPLOYEE_CREATE,
	EMPLOYEE_CREATE_START
} from '../actions/EmployeeActions';

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
		case EMPLOYEE_CREATE_START:
			return {... state, employeeBtnLoading: true, employeeBtnDisable: true};
		case EMPLOYEE_CREATE:
			return INITIAL_STATE;
		default:
			return state;
	}
}