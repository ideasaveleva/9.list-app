import React, { useState } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, FlatList, Image } from 'react-native';
import { gStyle } from '../styles/style';


export default function Main({ navigation }) {
	const [news, setNews] = useState([
		{name: 'Google', anons: 'Google!!!', full: 'Google is cool!', key: '1', img: 'http://itproger.com/img/courses/1615637098.jpg'},
		{name: 'Apple', anons: 'Apple!!!', full: 'Apple is cool!', key: '2', img: 'http://itproger.com/img/courses/1606232997.jpg'},
		{name: 'Yandex', anons: 'Yandex!!!', full: 'Yandex is cool!', key: '3', img: 'http://itproger.com/img/courses/1588400880.jpg'},
	]);

  return (
			<View style={gStyle.main}>
				<Text style={[gStyle.title], styles.header}>Главная страница</Text>
				<FlatList data={news} renderItem={({item}) => (
					<TouchableOpacity style={styles.item} onPress={() => navigation.navigate('FullInfo', item)}>
						<Image source={{
							width: '100%',
							height: 200,
							uri: item.img
						}}/>
						<Text style={styles.title}>{ item.name }</Text>
						<Text style={styles.anons}>{ item.anons }</Text>
					</TouchableOpacity>
				)} />
			</View>
		);
}


// Строка ниже используется для назначения дополнительных стилей, пока не нужна, тк используем глобальные.
const styles = StyleSheet.create({
	header: {
		marginBottom: 30
	},
	item: {
		width: '100%',
		marginBottom: 30,
	},
	title: {
		fontFamily: 'mt-bold',
		fontSize: 22,
		textAlign: 'center',
		marginTop: 20,
		color: '#474747'
	},
	anons: {
		fontFamily: 'mt-light',
		fontSize: 16,
		textAlign: 'center',
		marginTop: 5,
		color: '#474747'
	}
});
