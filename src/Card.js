import React from 'react';
import {StyleSheet, View} from 'react-native';

const Card = props => {
  return <View style={styles.view}>{props.children}</View>;
};

export default Card;

const styles = StyleSheet.create({
  view: {
    borderWidth: 1,
    borderRadius: 2,
    borderColor: '#ddd',
    borderBottomWidth: 0,
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 1,
    marginHorizontal: 2,
    marginTop: 10,
  },
});
