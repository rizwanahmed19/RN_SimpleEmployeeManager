import React, {Component} from 'react';
import {connect} from 'react-redux';
import _ from 'lodash';
import Communications from 'react-native-communications';

import {Card, CardSection, ConfirmModal} from './common';
import Button from './common/Button';
import {employeeEditUpdate, employeeSave, employeeDelete, clearEmployee} from '../actions';
import EmployeeForm from './EmployeeForm';

class EmployeeEdit extends Component {
	constructor(props) {
		super(props);

		this.state = {
			showModal: false
		}
	}

	componentWillMount() {
			const {name, phone, shift, uid} = this.props.employee;
			this.props.employeeEditUpdate({name, phone, shift, uid});
	}

	componentWillUnmount() {
		this.props.clearEmployee();
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

	onAccept() {
		const {uid} = this.props.employee;

		this.props.employeeDelete({ uid });
	}

	onDecline() {
		this.setState({showModal: false});
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

				<CardSection>
					<Button style={{backgroundColor: '#f44336'}} onPress={() => this.setState({showModal: !this.state.showModal})}>
						Fire Employee
					</Button>
				</CardSection>

				<ConfirmModal 
					isVisible={this.state.showModal}
					onAccept={this.onAccept.bind(this)}
					onDecline={this.onDecline.bind(this)}
				>
					Are you sure you want to fire this employee?
				</ConfirmModal>
			</Card>
		);
	}
}

const mapStateToProps = state => {
	const {name, phone, shift} = state.employeeForm;
	return {name, phone, shift};
}

export default connect(mapStateToProps, {
	employeeEditUpdate, employeeSave, employeeDelete, clearEmployee
})(EmployeeEdit);