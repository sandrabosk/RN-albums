import React, { Component } from 'react';
import { View } from 'react-native';
// to be able to get data from external API we need first to install library axios
// and then we need to import it
import axios from 'axios';
import AlbumDetail from './AlbumDetail';

// this is functional based view of component
// const AlbumList = () => {
//   return (
//     <View>
//       <Text>Album List !!!</Text>
//     </View>
//   );
// };

// lifecycle methods are the functions we create in our component
class AlbumList extends Component {
// 1. set the default state of our component (for us that's an empty list of albums)
  state = { albums: [] };

  componentWillMount() {
    // console.log('componentWillMount in AlbumList');
    axios.get('https://rallycoding.herokuapp.com/api/music_albums')
    // 2. after we fetch our data we take that state and we update our component state
      .then(response => this.setState({ albums: response.data }));
      //we are passing in albums (the actual list of albums wich we are updating right
      // now so it's not an empty array any more)
      // and reponse.data
      // (data is from the object that we got and saw in object in our console log
      // (all our data was inside data reference)
  }
  // we create method thats gonna helpp us display data and since we kniw it
  // is an array we will use .map method in which we will call fat arrow function saying
  // for each album display this information using text tag

  renderAlbums() {
    return this.state.albums.map( album =>
      // we are using key here to set unique value for each album
      // the best to use in this purpose is ID but since our albums do not have ID
      // we are using the title
      // <Text key={ album.title }> {album.title} </Text> );
      <AlbumDetail key={ album.title } album={album} /> );
      // here up we use props to pass data from parent to child
      // from AlbumList to AlbumDetail component
      // in this statement  album={album} the first album is the property we are passing
      // from the beggining after the map
      // and the second is the varible and can have any name we will be using for it in the child component

  }
render() {
  console.log(this.state);
    return (
      <View>
        {/* <Text>Album List !!!</Text> */}
        { this.renderAlbums () }
      </View>
    );
  }
}


export default AlbumList;
