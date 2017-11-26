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

//to be able to display component inside another component we
// 1. imported card component,
// replaced view tags with the Card tags and that was
// our way to wrap up this text "component" which we will send put
// as a props argument that we are passing
// the next step in the card componet:
// over there we took our props object and we added the reference { props.children }
