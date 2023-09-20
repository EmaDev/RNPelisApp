import { StackScreenProps } from '@react-navigation/stack';
import React from 'react';
import { ActivityIndicator, Dimensions, Image, ScrollView, StyleSheet, Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { MovieDetails } from '../components/MovieDetails';
import { useMovieDetails } from '../hooks/useMovieDetails';
import { RootStackParms } from '../navigators/Navigation';

interface Props extends StackScreenProps<RootStackParms, 'DetailScreen'> { };

const { width: widthWindow, height: heightWindow } = Dimensions.get('window');

export const Detail = ({ navigation, route }: Props) => {

  const movie = route.params;

  const urlImage = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;

  const { isLoading, movieFull, cast } = useMovieDetails(movie.id);

  return (
    <ScrollView>
      <View style={styles.posterContainer}>
        <View style={styles.poster}>
          <Image source={{ uri: urlImage }} style={styles.image} />
        </View>
      </View>

      <View style={{ margin: 10 }}>
        <Text style={styles.subtitle}>{movie.original_title}</Text>
        <Text style={styles.title}>{movie.title}</Text>
      </View>

      {
        (isLoading) ?

          <ActivityIndicator color='#01c6ac' size={40} style={{ marginTop: 20 }} />
          :
          <MovieDetails movieFull={movieFull!} cast={cast} />
      }



    </ScrollView>
  )
}

const styles = StyleSheet.create({
  posterContainer: {
    width: widthWindow,
    height: 0.7 * heightWindow,
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
    flex: 1,
    overflow: 'hidden',
    borderBottomEndRadius: 20,
    borderBottomStartRadius: 20
  },
  image: {
    flex: 1
  },

  subtitle: {
    fontSize: 18,
    color: '#393939'
  },
  title: {
    fontSize: 22,
    color: '#101010',
    fontWeight: 'bold'
  }
});
