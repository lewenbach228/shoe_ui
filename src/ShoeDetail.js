import { StyleSheet, Text, View, Image, Linking, ActivityIndicator } from "react-native";
import React from "react";
import Card from "./Card";

import { Button } from 'react-native-elements';

export default function ShoeDetail({ shoe }) {
  const { title, description, image, cost, link, like } = shoe;
  return (
    <View style={styles.Carda}>
      <View style={styles.ContainerImage}>
        <Image style={styles.image} source={{ uri: image }} PlaceholderContent={<ActivityIndicator />} />
        <View style={styles.name}>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.cost}>{cost} $</Text>
          <Text style={styles.description}>{description}</Text>
        </View>
      </View>
      <Button
      onPress={() => Linking.openURL(link)}
                title="BUY NOW"
                buttonStyle={{
                  backgroundColor: 'black',
                  borderWidth: 2,
                  borderColor: 'white',
                  borderRadius: 30,
                  
                }}
                containerStyle={{
                  width: 200,
                  marginHorizontal: 70,
                  marginVertical: 10,
                  
                }}
                titleStyle={{ fontWeight: 'bold' }}
              />
      <View>
       
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  Carda: {
    flexDirection: "column",
    marginHorizontal: 10,
    marginBottom: 30,
  },
  image: {
    height: 200,
    width: null,
    // flex: 1,
    margin: 10,
    resizeMode : 'contain'
  },
  name: {
    fontSize: 18,
    alignItems: "center",
  },
  title: {
    fontSize: 23,
    fontWeight: "bold",
    textAlign: "center",
  },
  cost: {
    fontSize: 18,
    color: "red",
  },
  like: {
    fontSize: 16,
  },
  description: {
    textAlign: "center",
  },
});
