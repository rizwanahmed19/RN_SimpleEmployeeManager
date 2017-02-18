import React, {Component} from 'react';
import {StyleSheet, Text, TouchableWithoutFeedback, View} from 'react-native';
import {Actions} from 'react-native-router-flux';

import {CardSection} from './common';

class ListItem extends Component {
	handleRowPress() {
		const {name, phone, shift, uid} = this.props;
		Actions.employeeEdit({ employee: {name, phone, shift, uid} });
	}

	render() {
		var {name} = this.props;
		return (
			<TouchableWithoutFeedback onPress={this.handleRowPress.bind(this)}>
				<View>
					<CardSection style={{justifyContent: 'flex-start', padding: 10, margin: 0}}>
						<Text style={styles.title}>{name}</Text>
					</CardSection>
				</View>
			</TouchableWithoutFeedback>
		);
	}
}

const styles = StyleSheet.create({
	title: {
		fontSize: 18,
		paddingLeft: 15,
		color: '#343434'
	}
});

export default ListItem;