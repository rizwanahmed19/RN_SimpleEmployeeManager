import React from 'react';
import {View, StyleSheet} from 'react-native';

const Card = (props) => {
	return (
			<View style={styles.container}>
				{props.children}
			</View>
	);
}

const styles = StyleSheet.create({
	container: {
		borderWidth: 1,
		borderColor: '#ddd',
		borderRadius: 2,
		borderBottomWidth: 3,
		marginHorizontal: 10,
		marginTop: 15,
		elevation: 5
	}
});

export {Card};