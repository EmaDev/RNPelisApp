import React from 'react';
import { ScrollView, Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import currencyFormatter from 'currency-formatter';

import { Cast } from '../interfaces/creditsInterface';
import { MovieFull } from '../interfaces/movieDbInterface';
import { ActorItem } from './ActorItem';

interface Props {
    movieFull: MovieFull;
    cast: Cast[];
}

export const MovieDetails = ({ movieFull, cast }: Props) => {

    return (
        <>

            <View style={{ marginHorizontal: 20, flexDirection: 'row', alignItems: 'center' }}>
                <Icon
                    name="star-outline"
                    color="#393939"
                    size={22}
                />
                <Text style={{ fontSize: 22, color: '#393939', marginLeft: 10 }}>{movieFull.vote_average}</Text>
                <Text style={{ fontSize: 16, color: '#393939', marginLeft: 6 }}>
                    { }- { }{movieFull.genres.map(gen => gen.name).join(', ')}
                </Text>

            </View>

            <View style={{ margin: 10 }}>
                <Text style={{ fontSize: 20, color: '#101010', fontWeight: 'bold' }}>Argumento</Text>
                <Text style={{ fontSize: 16, color: '#393939', marginVertical: 10 }}>{movieFull.overview}</Text>
                <Text style={{ fontSize: 20, color: '#101010', fontWeight: 'bold' }}>Presupuesto</Text>
                <Text style={{ fontSize: 20, color: '#393939', marginVertical: 10 }}>
                    {currencyFormatter.format(movieFull.budget, { code: 'USD' })}
                </Text>
            </View>

            <View style={{ marginTop: 10, marginBottom: 100 }}>
               
                <Text style={{ fontSize: 20, color: '#101010', fontWeight: 'bold', marginLeft: 10 }}>Elenco</Text>

                <ScrollView horizontal>
                    {
                        cast.map( (actor, i) => (
                            <ActorItem key={i} actor={actor}/>
                        ))
                    }

                </ScrollView>

            </View>
        </>
    )
}
