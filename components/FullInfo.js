import React from 'react';
import { StyleSheet, View, Text, } from 'react-native';
import { gStyle } from '../styles/style';


export default function FullInfo( { route }) {
	// const loadScene = () => {
	// 	navigation.goBack();
	// }

  return (
			<View style={gStyle.main}>
				<Text style={gStyle.title}>{route.params.name}</Text>
				<Text>{route.params.full}</Text>
			</View>
		);
}


// Строка ниже используется для назначения дополнительных стилей, пока не нужна, тк используем глобальные.
const styles = StyleSheet.create({

});
