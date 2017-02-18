import React from 'react';
import {View, TextInput, Text, StyleSheet} from 'react-native';

const Input = props => {
	return (
		<View style={styles.container}>
			<Text style={styles.label}>{props.label}</Text>
			<TextInput
				secureTextEntry={props.secureTextEntry}
				placeholder={props.placeholder} 
				value={props.value}
				onChangeText={props.onChangeText}
				style={styles.input}
			/>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flexDirection: 'row',
		flex: 1,
		alignItems: 'center',
		height: 55
	},
	input: {
		flex: 4,
		color: '#000',
		fontSize: 18,
		lineHeight: 23
	},
	label: {
		fontSize: 18,
		paddingLeft: 15,
		flex: 2,
	}
});

export {Input};