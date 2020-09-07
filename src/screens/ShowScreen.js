import React, { useContext } from 'react'
import { StyleSheet, Text, View } from 'react-native';
import { Context } from '../context/BlogContext';

export default function ShowScreen({ navigation }) {
    const { state } = useContext(Context);
    id = navigation.getParam('id');
    const blogPost = state.find((blogPost) => blogPost.id == id);

    return (
        <View>
            <Text>{blogPost.title}</Text>
        </View>
    )
}

const styles = StyleSheet.create({})
