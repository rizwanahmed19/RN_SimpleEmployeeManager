import React, {Component} from 'react';
import {connect} from 'react-redux';
import _ from 'lodash';
import Communications from 'react-native-communications';

import {Card, CardSection} from './common';
import Button from './common/Button';
import {employeeEditUpdate, employeeSave} from '../actions';
import EmployeeForm from './EmployeeForm';

class EmployeeEdit extends Component {
	componentWillMount() {
			const {name, phone, shift, uid} = this.props.employee;
			this.props.employeeEditUpdate({name, phone, shift, uid});
	}

	handleSavePress() {
		const {name, phone, shift} = this.props;

		this.props.employeeSave({name, phone, shift, uid: this.props.employee.uid})
	}

	handleTextPress() {
		const {name, phone, shift} = this.props;
		const message = `Hey ${name}, your upcoming shift is on ${shift}`;

		Communications.text(phone, message);
	}
	render() {
		return (
			<Card>
				<EmployeeForm {...this.props} />
				
				<CardSection>
					<Button onPress={this.handleSavePress.bind(this)}>
						Save Changes
					</Button>
				</CardSection>

				<CardSection>
					<Button onPress={this.handleTextPress.bind(this)}>
						Text Schedule
					</Button>
				</CardSection>
			</Card>
		);
	}
}

const mapStateToProps = state => {
	const {name, phone, shift} = state.employeeForm;
	return {name, phone, shift};
}

export default connect(mapStateToProps, {employeeEditUpdate, employeeSave})(EmployeeEdit);