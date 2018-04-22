import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { Button } from 'react-native';

import styles from './styles';

export default class ClickButton extends React.Component {
	render() {
		let props = this.props;
		return (
			<TouchableOpacity style={styles.circleButton} {...props}>
				<Text style={styles.buttonText}> Touch Here </Text>
			</TouchableOpacity>
		);
	}
}
// const ClickButton = props => (
// 	<TouchableOpacity style={styles.circleButton} {props}>
// 		<Text style={styles.buttonText}> Touch Here </Text>
// 	</TouchableOpacity>
// );
// export default ClickButton;
