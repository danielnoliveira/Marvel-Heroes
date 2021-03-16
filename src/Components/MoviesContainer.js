import React from 'react';
import {View, ScrollView} from 'react-native';
import {
  TitleSection,
  MovieImage,
} from './../StyledComponents/stylesMoviesContainer';
export default function MoviesContainer({movies}) {
  return (
    <View>
      <TitleSection>Filmes</TitleSection>
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        {movies.map((movie, index) => {
          return <MovieImage source={movie} key={index} />;
        })}
      </ScrollView>
    </View>
  );
}
