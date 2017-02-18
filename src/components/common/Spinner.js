import React from 'react';
import {View, ActivityIndicator, StyleSheet} from 'react-native';

const Spinner = (props) => {
	return (
		<View style={[styles.spinnerStyle, props.style]}>
			<ActivityIndicator size={props.size || 'large'} color={props.color || 'gray'} />
		</View>
	);
}

const styles = StyleSheet.create({
	spinnerStyle: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center'
	}
});

export { Spinner };