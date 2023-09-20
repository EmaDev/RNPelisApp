import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Image, TouchableOpacity, StyleSheet, Text, View } from 'react-native';
import { Movie } from '../interfaces/movieDbInterface';

interface Props {
    movie: Movie;
    height?: number;
    width?: number;
}

export const MoviePoster = ({ movie, height = 420, width = 300 }: Props) => {


    const navigation = useNavigation();

    const urlImage = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;

    const navToMovie = () => {
        navigation.navigate('DetailScreen', movie);
    }
    return (
        <TouchableOpacity 
        onPress={navToMovie} 
        activeOpacity={0.8}
        style={{ ...styles.poster, width, height }}>
            <View style={styles.imageContainer}>
            <Image source={{ uri: urlImage }} style={styles.image} />
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({

    image: {
        flex: 1,
        borderRadius: 16,
        shadowColor: "#000",
    },
    imageContainer: {
        flex: 1,
        borderRadius: 16,
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.7,
        shadowRadius: 3.84,

        elevation: 9,
    },
    poster: {
        marginHorizontal: 5
    }
});
