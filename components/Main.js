import React, { useState } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, FlatList } from 'react-native';
import { gStyle } from '../styles/style';


export default function Main({ navigation }) {
	const [news, setNews] = useState([
		{name: 'Google', anons: 'Google!!!', full: 'Google is cool!'},
		{name: 'Apple', anons: 'Apple!!!', full: 'Apple is cool!'},
		{name: 'Yandex', anons: 'Yandex!!!', full: 'Yandex is cool!'},
	]);

  return (
			<View style={gStyle.main}>
				<Text style={gStyle.title}>Главная страница</Text>
				<FlatList data={news} renderItem={({item}) => (
					<TouchableOpacity onPress={() => navigation.navigate('FullInfo', item)}>
						<Text>{ item.name }</Text>
						<Text>{ item.anons }</Text>
					</TouchableOpacity>
				)} />
			</View>
		);
}


// Строка ниже используется для назначения дополнительных стилей, пока не нужна, тк используем глобальные.
const styles = StyleSheet.create({

});
