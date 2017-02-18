import React, {Component} from 'react';
import {Text, StyleSheet} from 'react-native';
import {connect} from 'react-redux';

import {Card, CardSection, Input} from './common';
import Button from './common/Button';
import {emailChanged, passwordChanged, loginUser} from '../actions';

class LoginForm extends Component {
	handleEmailChange(text) {
		this.props.emailChanged(text);
	}

	handlePasswordChange(text) {
		this.props.passwordChanged(text);
	}

	handlePress() {
		const {email, password} = this.props;
		this.props.loginUser({email, password});
	}

	renderError() {
		var errorText = null;
		const {error} = this.props;
		if(error !== '') {
			errorText = <CardSection><Text style={styles.error}>{error}</Text></CardSection>
		}
		return errorText;
	}

	render() {
		return (
			<Card>
				<CardSection>
					<Input 
						label='Email'
						placeholder='user@example.com'
						onChangeText={this.handleEmailChange.bind(this)}
						value={this.props.email}
					/>
				</CardSection>

				<CardSection>
					<Input
						secureTextEntry
						label='Password'
						placeholder='password'
						onChangeText={this.handlePasswordChange.bind(this)}
						value={this.props.password}
					/>
				</CardSection>
				
				{this.renderError()}

				<CardSection>
					<Button onPress={this.handlePress.bind(this)}>Log in</Button>
				</CardSection>
			</Card>
		);
	}
}

var mapStateToProps = state => {
	var {email, password, error} = state.auth;
	return {
		email,
		password,
		error
	}
}

const styles = StyleSheet.create({
	error: {
		fontSize: 20,
		color: '#f00'
	}
})

export default connect(mapStateToProps, { 
	emailChanged, passwordChanged, loginUser 
})(LoginForm);