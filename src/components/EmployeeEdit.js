import React, {Component} from 'react';
import {connect} from 'react-redux';
import _ from 'lodash';

import {Card, CardSection} from './common';
import Button from './common/Button';
import {employeeEditUpdate} from '../actions';
import EmployeeForm from './EmployeeForm';

class EmployeeEdit extends Component {
	componentWillMount() {
			const {name, phone, shift, uid} = this.props.employee;
			this.props.employeeEditUpdate({name, phone, shift, uid});
			console.log(name, phone, shift);
	}

	handleButtonPress() {
		const {name, phone, shift} = this.props;

	}
	render() {
		return (
			<Card>
				<EmployeeForm {...this.props} />
				<CardSection>
					<Button>
						Save Changes
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

export default connect(mapStateToProps, {employeeEditUpdate})(EmployeeEdit);