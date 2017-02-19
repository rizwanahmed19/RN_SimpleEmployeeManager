import React, {Component} from 'react';
import {ListView, View} from 'react-native';
import _ from 'lodash';
import {connect} from 'react-redux';

import {employeesFetch} from '../actions';
import ListItem from './ListItem';
import {Spinner} from './common';

class EmployeeList extends Component {
	componentWillMount() {
		this.props.employeesFetch();

		this.createDataSource(this.props);
	}

	componentWillReceiveProps(newProps) {
		this.createDataSource(newProps);
	}

	createDataSource({ employees }) {
		const ds = new ListView.DataSource({
			rowHasChanged: (r1, r2) => r1 !== r2
		});

		this.dataSource = ds.cloneWithRows(employees);
	}

	renderRow(employee) {
		return <ListItem {...employee} />
	}

	renderListView() {
		var listView = (
			<ListView 
				style={{marginTop: -7}}
				enableEmptySections
				dataSource={this.dataSource}
				renderRow={this.renderRow}
			/>
		);
		if(this.props.employees.length === 0) {
			listView = <Spinner style={{marginTop: 20}} />;
		}

		return listView;
	}

	render() {
		return (
			<View>
				{this.renderListView()}
			</View>
		);
	}
}

const mapStateToProps = state => {
	const employees = _.map(state.employees, (val, uid) => {
		return { ...val, uid };
	})
	return { employees };
}

export default connect(mapStateToProps, { employeesFetch })(EmployeeList);