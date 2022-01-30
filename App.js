import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import ShoesList from './src/ShoesList';



export default function App() {
  return (
    <View style={styles.view}>
      <Text style={styles.textStyle}>Amazon Shoes</Text>
      <StatusBar style="auto" />
      <ShoesList />
    </View>
  );
}

const styles = StyleSheet.create({
  view: {
    // backgroundColor: "cyan",
    justifyContent: "center",
    alignItems: "center",
    height: 60,
    paddingTop: 15,
    marginTop: 25,
    // shaddowColor: '#000',
    // shaddowOffset: {witdh: 0, height: 2},
    // shaddowOpacity: 2,
    position: "relative",
    flex : 1
  },
  textStyle: {
    fontSize: 25,
    marginBottom : 20
  },
});
