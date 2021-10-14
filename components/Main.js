import React, { useState } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, FlatList, Image, Modal } from 'react-native';
import { gStyle } from '../styles/style';
import { Ionicons } from '@expo/vector-icons';
import Form from './Form';

export default function Main({ navigation }) {
	const [news, setNews] = useState([
		{name: 'Google', anons: 'Google!!!', full: 'Google is cool!', key: '1', img: 'http://itproger.com/img/courses/1615637098.jpg'},
		{name: 'Apple', anons: 'Apple!!!', full: 'Apple is cool!', key: '2', img: 'http://itproger.com/img/courses/1606232997.jpg'},
		{name: 'Yandex', anons: 'Yandex!!!', full: 'Yandex is cool!', key: '3', img: 'http://itproger.com/img/courses/1588400880.jpg'},
	]);

	const [modalWindow, setModalWindow] = useState(false);

	const addArticle = (article) => {
		setNews((list) => {
			article.key = Math.random().toString();
			return [
				article,
				...list,
			]
		});
		setModalWindow(false);
	}

  return (
			<View style={gStyle.main}>
				<Modal visible={modalWindow}>
					<View style={gStyle.main}>
						<Ionicons name="close-circle" size={34} color="red" style={styles.iconClose} onPress={() => setModalWindow(false)}/>
						<Text style={styles.title}>Форма добавления статей</Text>
						<Form addArticle={addArticle} />
					</View>
				</Modal>
				<Ionicons name="add-circle" size={34} color="green" style={styles.iconAdd} onPress={() => setModalWindow(true)}/>
				<Text style={[gStyle.title], styles.header}>Главная страница</Text>
				<FlatList data={news} renderItem={({item}) => (
					<TouchableOpacity style={styles.item} onPress={() => navigation.navigate('FullInfo', item)}>
						<Image style={styles.image} source={{uri: item.img}}/>
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
		color: '#474747',
	},
	anons: {
		fontFamily: 'mt-light',
		fontSize: 16,
		textAlign: 'center',
		marginTop: 5,
		color: '#474747'
	},
	image: {
		width: '100%',
		height: 200,
	},
	iconAdd: {
		textAlign: 'center',
		marginBottom: 15,
		marginTop: 10,
	},
	iconClose: {
		textAlign: 'center',
	},
});
