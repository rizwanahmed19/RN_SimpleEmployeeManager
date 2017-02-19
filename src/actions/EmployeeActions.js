import firebase from 'firebase';
import {Actions} from 'react-native-router-flux';

export const EMPLOYEE_UPDATE = 'EMPLOYEE_UPDATE';
export const EMPLOYEE_CREATE = 'EMPLOYEE_CREATE';
export const EMPLOYEE_CREATE_START = 'EMPLOYEE_CREATE_START';
export const EMPLOYEES_FETCH_SUCCESS = 'EMPLOYEES_FETCH_SUCCESS';
export const EMPLOYEE_EDIT_UPDATE = 'EMPLOYEE_EDIT_UPDATE';
export const EMPLOYEE_SAVE_SUCCESS = 'EMPLOYEE_SAVE_SUCCESS';
export const CLEAR_EMPLOYEE = 'CLEAR_EMPLOYEE';

export const employeeUpdate = ({prop, value}) => {
	return {
		type: EMPLOYEE_UPDATE,
		payload: {prop, value}
	}
}

export const employeeCreate = ({name, phone, shift}) => {
	const {currentUser} = firebase.auth();

	return (dispatch) => {
		dispatch({type: EMPLOYEE_CREATE_START});

		firebase.database().ref(`/users/${currentUser.uid}/employees`)
			.push({ name, phone, shift })
			.then(() => {
				dispatch({type: EMPLOYEE_CREATE});
				Actions.employeeList({type: 'reset'});
			});
	}
};

export const employeesFetch = () => {
	const {currentUser} = firebase.auth();

	return (dispatch) => {
		firebase.database().ref(`/users/${currentUser.uid}/employees`)
			.on('value', snapshot => {
				dispatch({type: EMPLOYEES_FETCH_SUCCESS, payload: snapshot.val()});
			});
	};
};

export const employeeEditUpdate = ({name, phone, shift, uid}) => {
	return {
		type: EMPLOYEE_EDIT_UPDATE,
		payload: {
			name,
			phone,
			shift,
			uid
		}
	}
}

export const employeeSave = ({name, phone, shift, uid}) => {
	const {currentUser} = firebase.auth();

	return (dispatch) => {
		firebase.database().ref(`/users/${currentUser.uid}/employees/${uid}`)
			.set({ name, phone, shift})
			.then(() => {
				dispatch({type: EMPLOYEE_SAVE_SUCCESS});
				Actions.employeeList({type: 'reset'});
			});
	}
}

export const employeeDelete = ({ uid }) => {
	const {currentUser} = firebase.auth();

	return () => {
		firebase.database().ref(`/users/${currentUser.uid}/employees/${uid}`)
			.remove()
			.then(() => {
				Actions.employeeList({ type: 'reset' });
			})
	}	
}

export const clearEmployee = () => ({
	type: CLEAR_EMPLOYEE
});