import React from 'react';
import { View, Text } from 'react-native';

// this will be a functional component since we do not need lifecycle methods
// nor the access to the state

const AlbumDetail = (props) => {
  return (
    <View>
      <Text>{ props.album.title }</Text>
    </View>
  );
};

export default AlbumDetail;
