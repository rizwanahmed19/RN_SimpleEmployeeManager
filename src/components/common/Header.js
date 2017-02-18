import React from 'react';
import {Text, View, StyleSheet} from 'react-native';

const Header = (props) => {
	return (
		<View style={styles.container}>
			<Text style={styles.text}>{props.headerText}</Text>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		height: 60,
		paddingTop: 15,
		backgroundColor: '#f8f8f8',
		justifyContent: 'center',
		alignItems: 'center',
		elevation: 4
	},
	text: {
		fontSize: 20,
	}
});

export {Header};