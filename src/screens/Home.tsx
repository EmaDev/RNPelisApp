import React from 'react';
import { ActivityIndicator, Dimensions, View, Text, ScrollView} from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import Carousel from 'react-native-snap-carousel';
import { HorizontalSlider } from '../components/HorizontalSlider';
import { MoviePoster } from '../components/MoviePoster';
import { useMovies } from '../hooks/useMovies';


const { width: windowWidth } = Dimensions.get('window');
export const Home = () => {
      
  const { isLoading,enCines,populares,proximosEstrenos,mejorCalificadas } = useMovies();
  const { top } = useSafeAreaInsets();

  if (isLoading) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator color='#01c6ac' size={50} />
      </View>
    )
  }

  return (
    <ScrollView>
      <View style={{ marginTop: top + 20 }}>

        <View style={{ height: 440 }}>
          <Carousel
            data={enCines}
            renderItem={({ item }: any) => <MoviePoster movie={item} />}
            sliderWidth={windowWidth}
            itemWidth={300}
            inactiveSlideOpacity={0.9}
          />
        </View>

        <HorizontalSlider title={'Populares'} movies={populares}/>
        <HorizontalSlider title={'Proximos estrenos'} movies={proximosEstrenos}/>

      </View>
    </ScrollView>
  )
}
