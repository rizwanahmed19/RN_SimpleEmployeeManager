import React, {Component} from 'react';
import {Text, View, StyleSheet} from 'react-native';
import Modal from 'react-native-animated-modal';

import {CardSection} from './CardSection';
import Button from './Button';

class ConfirmModal extends Component {
	// constructor(props) {
	// 	super(props);

	// 	this.state = {
	// 		showModal: this.props.isOpen
	// 	}
	// }
	// componentWillReceiveProps(newProps) {
	// 	this.setState({showModal: newProps.isOpen})
	// }

	render() {
		return (
			<View style={styles.container}>
				<Modal
					isVisible={this.props.isVisible}
				>
					<View style={styles.modalContent}>
						<CardSection style={styles.cardSection}>
							<Text style={styles.text}>{this.props.children}</Text>
						</CardSection>
										
						<CardSection style={styles.cardSection}>
							<Button style={styles.acceptBtn} onPress={this.props.onAccept}>Yes</Button>
							<Button onPress={this.props.onDecline}>No</Button>
						</CardSection>
					</View>
				</Modal>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		justifyContent: 'center',
		alignItems: 'center',
		flex: 1,
	},
	acceptBtn: {
		backgroundColor: '#f44336',
		marginRight: 20,
	},
	text: {
		flex: 1,
		textAlign: 'center',
		fontSize: 22,
		lineHeight: 40
	},
	modalContent: {
		height: 250,
		backgroundColor: '#fff',
		paddingHorizontal: 15,
		justifyContent: 'center',
		alignItems: 'center',
		borderColor: 'rgba(0, 0, 0, 0.1)',
		borderRadius: 5
	}
});

export {ConfirmModal};