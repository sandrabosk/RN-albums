import React from 'react';
import { Text, View, Image, Linking } from 'react-native';

// this will be a functional component since we do not need lifecycle methods
// nor the access to the state

// we are importing Card component and
//we are replacing <View> tag with <Card> tag
import Card from './Card';
import CardSection from './CardSection';
import Button from './Button';

const AlbumDetail = ({ album }) => {
  // in this case "album" is the argument object
  // here insted the props in the braces we will put album
  // because that is the only prop we are using
  // the we will destructure album into the argument body elements
  // after we do this we will delete props.album wherever we are using it
  // example : { uri: props.album.thumbnail_image } => { uri: thumbnail_image }
  const { title, artist, thumbnail_image, image, url } = album;

  // the styles is used two times in
  //(style={styles.thumbnailStyle}, style={styles.headerContentStyle})
  // so we can destructure it too, but this is optional

  const {
    thumbnailStyle,
    headerTextStyle,
    headerContentStyle,
    thumbnailContainerStyle,
    imageStyle
  } = styles;

  return (
    // <View>
    <Card>
      <CardSection>

        <View style={thumbnailContainerStyle}>
          <Image style={thumbnailStyle} source={{ uri: thumbnail_image }} />
        </View>

        <View style={headerContentStyle}>
          <Text style={headerTextStyle}> { title } </Text>
          <Text> { artist } </Text>
        </View>

      </CardSection>

      <CardSection>
        <Image source={{ uri: image }} style={imageStyle} />
      </CardSection>

      <CardSection>
        {/* this onPress can be called however and
          it is not related to the onPress in TouchableOpacity */}
        <Button onPress={() => Linking.openURL(url)}>
          Buy Now
        </Button>
        {/* we do this so our Button component can be reusable */}
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
  },
  headerTextStyle: {
    fontSize: 18
  },
  thumbnailStyle: {
    height: 50,
    width: 50
  },
  thumbnailContainerStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 10,
    marginRight: 10
  },
  imageStyle: {
    //we want our image to be full width of our viewport but we don't want to hardcode this
    // this is the way:
    height: 300,
    flex: 1,
    width: null
  }

};
// !!! to be able to render image we have to specify their charactersitics upfront (height, width)
export default AlbumDetail;

//to be able to display component inside another component we
// 1. imported card component,
// replaced view tags with the Card tags and that was
// our way to wrap up this text "component" which we will send put
// as a props argument that we are passing
// the next step in the card componet:
// over there we took our props object and we added the reference { props.children }
