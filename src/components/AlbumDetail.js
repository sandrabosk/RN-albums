import React from 'react';
import { Text, View } from 'react-native';

// this will be a functional component since we do not need lifecycle methods
// nor the access to the state

// we are importing Card component and
//we are replacing <View> tag with <Card> tag
import Card from './Card';
import CardSection from './CardSection';

const AlbumDetail = (props) => {
  return (
    // <View>
    <Card>
      <CardSection>

        <View></View>

        <View style={styles.headerContentStyle}>
          <Text> { props.album.title } </Text>
          <Text> { props.album.artist } </Text>
        </View>
        
      </CardSection>
    </Card>
    // </View>
  );
};
//we have to style our second view tag which contains two text tags
// we know we will have column style since one is under the oher one
// we will use justifyContent: 'space-around' so it gives us equal white space arount it
const styles = {
  headerContentStyle: {
    flexDirection: 'column',
    justifyContent: 'space-around'
  }
};

export default AlbumDetail;

//to be able to display component inside another component we
// 1. imported card component,
// replaced view tags with the Card tags and that was
// our way to wrap up this text "component" which we will send put
// as a props argument that we are passing
// the next step in the card componet:
// over there we took our props object and we added the reference { props.children }
