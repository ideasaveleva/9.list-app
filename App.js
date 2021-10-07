import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, View, FlatList, Text } from 'react-native';
import Header from './components/Header';
import ListItem from './components/ListItem';
import Form from './components/Form';

export default function App() {
		const [listOfItems, setListOfItems] = useState([
		{text: 'Стать успешным программистом', key: '1'},
		{text: 'Забрать свой участок', key: '2'},
		{text: 'Построить дом', key: '3'},
		{text: 'Быть счастливым', key: '4'},
	])

	const addHandler = (text) => {
		setListOfItems((list) => {
			return [
				{text: text, key: Math.random().toString(36).substring(7)},
				...list
			]
		})
	}

	const deleteHandler = (key) => {
		setListOfItems((list) => {
			return list.filter(listOfItems => listOfItems.key != key )
		})
	}

  return (
    <View style={styles.mainBlock}>
      <Header/>
			<Form addHandler={addHandler}/>
			<View>
				<FlatList data={listOfItems} renderItem={({ item }) => (
					<ListItem el={item} deleteHandler={deleteHandler}/>
				)}/>
			</View>
    </View>
  );
}

const styles = StyleSheet.create({
  
});
