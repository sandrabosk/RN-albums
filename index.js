//import a library to help create a component

import React from 'react';
// import ReactNative from 'react-native';
import { Text, AppRegistry } from 'react-native'; //this line is saying I just need Text property from react-native
// we have to declare this variable Text since here we don't have any gobal variables
// tag Text is given to us from react-native library but we have to import it and this technique is called IMPORT DESTRUCTURE

//create a component (component has something that can be displayed on the screen)
// component is JS function that returns some amount of JSX
//react-native will take our component and render it to the screen

const App = () => (
    <Text> Something written here </Text>
  );                               // ^
                                // |
                                  //   => this is JSX (looks like html but it is JS)

//render it to the device
AppRegistry.registerComponent('albums', () => App );
                                          // |
                                          // the first argument is the name of our project
                                          // the second argument is the function that returns the component that gets to be rendered the first in our application



//this was automatically given in this file

// import { AppRegistry } from 'react-native';
// import App from './App';
//
// AppRegistry.registerComponent('albums', () => App);
