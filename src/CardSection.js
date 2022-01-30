import React from 'react';
import {StyleSheet, View} from 'react-native';

const CardSection = props => {
  return <View style={styles.view}>{props.children}</View>;
};

export default CardSection;

const styles = StyleSheet.create({
  view: {
    borderBottomWidth: 1,
    padding: 5,
    backgroundColor: '#fff',
    justifyContent: 'flex-start',
    flexDirection: 'row',
    position: 'relative',
    borderColor: '#ddd',
  },
});
