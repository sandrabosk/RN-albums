import React from 'react';
import { Text } from 'react-native';

// this will be a functional component since we do not need lifecycle methods
// nor the access to the state

// we are importing Card component and
//we are replacing <View> tag with <Card> tag
import Card from './Card';

const AlbumDetail = (props) => {
  return (
    // <View>
    <Card>
      <Text>{ props.album.title }</Text>
    </Card>
    // </View>
  );
};

export default AlbumDetail;
