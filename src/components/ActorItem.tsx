import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import { Cast } from '../interfaces/creditsInterface';

interface Props{
    actor: Cast;
}

export const ActorItem = ({actor}:Props) => {
  
    const urlImage = `https://image.tmdb.org/t/p/w500${actor.profile_path}`;
    return (
    <View style={styles.container}>
        <View style={styles.imageContainer}>
            <Image
            source={ (actor.profile_path) ? {uri: urlImage} : require('../assets/actor-profile.jpg') }
            style={styles.image} 
            />
        </View>
        <View>
        <Text style={styles.name}>{actor.name}</Text>
        <Text style={styles.character}>{actor.character}</Text>
        </View>
    </View>
  )
}

const styles = StyleSheet.create({

    container:{
        padding: 8,
        backgroundColor: '#C8C8C8',
        flexDirection: 'row',
        margin: 8,
        borderRadius: 8
    },
    imageContainer:{
        width: 75,
        height: 75,
        marginRight: 8
    },
    image:{
        flex: 1,
        borderRadius: 3
    },
    name:{
        fontSize: 18,
        fontWeight: 'bold',
        color: '#101010'
    },
    character:{
        fontSize: 16,
        color: '#393939'
    }

});
