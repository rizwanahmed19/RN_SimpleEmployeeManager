import React, {Component} from 'react';
import {View, Text, TouchableNativeFeedback, StyleSheet} from 'react-native';
import {connect} from 'react-redux';

import {Spinner} from './index';

class Button extends Component {

	renderText() {
		if(this.props.loading || this.props.employeeBtnLoading) {
			return <Spinner color='white' size='small' />
		}

		return (
			<Text style={styles.text}>{this.props.children}</Text>
		);
	}

	render() {
		return (
			<TouchableNativeFeedback
				disabled={this.props.disable || this.props.employeeBtnDisable}
				onPress={this.props.onPress}
        background={TouchableNativeFeedback.Ripple('##fff', false)}>
	      <View style={[styles.btnContainer, this.props.style]}>
	        {this.renderText()}
	      </View>
	    </TouchableNativeFeedback>
		);
	}
}

const styles = StyleSheet.create({
	btnContainer: {
		height: 50, 
		backgroundColor: '#03A9F4',
		justifyContent: 'center',
		alignItems: 'center',
		flex: 1,
		marginVertical: 1,
	},
	text: {
		color: '#fff',
		fontSize: 16,
	}
});

var mapStateToProps = state => {
	var {loading, disable} = state.auth;
	var {employeeBtnLoading, employeeBtnDisable} = state.employeeForm;
	return {
		loading,
		disable,
		employeeBtnLoading,
		employeeBtnDisable
	}
}

export default connect(mapStateToProps)(Button);