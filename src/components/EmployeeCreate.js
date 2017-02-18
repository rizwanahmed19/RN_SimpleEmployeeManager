import React, {Component} from 'react';
import {connect} from 'react-redux';

import {Card, CardSection} from './common';
import Button from './common/Button';
import {employeeCreate} from '../actions';
import EmployeeForm from './EmployeeForm';

class EmployeeCreate extends Component {
	handlePress() {
		const {name, phone, shift} = this.props;

		this.props.employeeCreate({name, phone, shift: shift || 'Monday'});
	}
	render() {
		return (
			<Card>
				<EmployeeForm {...this.props} />
				<CardSection>
					<Button onPress={this.handlePress.bind(this)} >
						Create
					</Button>
				</CardSection>
			</Card>
		);
	}
}

const mapStateToProps = state => {
	const { name, phone, shift } = state.employeeForm;

	return { name, phone, shift };
}


export default connect(mapStateToProps, {employeeCreate})(EmployeeCreate);