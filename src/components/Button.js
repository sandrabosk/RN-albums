import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

// TouchableOpacity we use to get the effect of clicking on the Button
// with TouchableOpacity the button fades in and out
const Button = () => {
const { buttonStyle, textStyle } = styles;

  return (
    <TouchableOpacity style={buttonStyle}>
      <Text style={textStyle}>
        Click me!!!
      </Text>
    </TouchableOpacity>
  );
};

const styles={
  textStyle: {
    alignSelf: 'center',
    color: '#007aff',
    fontSize: 16,
    fontWeight: '600',
    paddingTop: 10,
    paddingBottom: 10
  },
  buttonStyle: {
    flex: 1,
    alignSelf: 'stretch', // stretch to fill the limits of the container
    backgroundColor: '#fff',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#007aff',
    marginLeft: 5,
    marginRight: 5
  }
};

export default Button;
