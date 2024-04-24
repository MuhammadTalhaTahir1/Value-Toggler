import { StyleSheet, Text, View } from "react-native";
import React from "react";

const CounterView = ({counterValue}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{counterValue}</Text>
    </View>
  );
};

export default CounterView;

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
  },
  text:{
    fontSize:30
  }
});
