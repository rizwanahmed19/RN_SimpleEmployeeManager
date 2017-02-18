import React, {Component} from 'react';
import {Picker, Text, StyleSheet} from 'react-native';
import {connect} from 'react-redux';

import {Card, CardSection, Input} from './common';
import Button from './common/Button';
import {employeeUpdate, employeeCreate} from '../actions';

class EmployeeCreate extends Component {
	handlePress() {
		const {name, phone, shift} = this.props;

		this.props.employeeCreate({name, phone, shift: shift || 'Monday'});
	}
	render() {
		return (
			<Card>
				<CardSection>
					<Input
						label='Name'
						placeholder="John Doe"
						value={this.props.name}
						onChangeText={value => this.props.employeeUpdate({prop: 'name', value})}
					/>
				</CardSection>

				<CardSection>
					<Input 
						label='Phone'
						placeholder='555-555-5555'
						value={this.props.phone}
						onChangeText={value => this.props.employeeUpdate({prop: 'phone', value})}
					/>
				</CardSection>

				<CardSection style={{}}>
					<Text style={styles.pickerLabel}>Shift</Text>
					<Picker
						style={{flex: 2, alignSelf: 'center'}}
						selectedValue={this.props.shift}
						onValueChange={value => this.props.employeeUpdate({prop: 'shift', value})}
					>
						<Picker.Item label="Monday" value="Monday" />
						<Picker.Item label="Tuesday" value="Tuesday" />
						<Picker.Item label="Wednesday" value="Wednesday" />
						<Picker.Item label="Thursday" value="Thursday" />
						<Picker.Item label="Friday" value="Friday" />
						<Picker.Item label="Saturday" value="Saturday" />
						<Picker.Item label="Sunday" value="Sunday" />
					</Picker>
				</CardSection>

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

const styles = StyleSheet.create({
	pickerLabel: {
		fontSize: 18,
		paddingLeft: 14,
		flex: 1,
		alignSelf: 'center'
	}
});

export default connect(mapStateToProps, { 
	employeeUpdate, employeeCreate
})(EmployeeCreate);