import { StyleSheet, Text, View } from "react-native";
import React from "react";
import tailwind from "twrnc";

const CounterView = ({counterValue}) => {
  return (
    <View style={styles.container}>
      <Text style={tailwind`text-3xl text-white`}>Result :  {counterValue}</Text>
    </View>
  );
};

export default CounterView;

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
  },
  text:{
    fontSize:30,
    color:'white'
  }
});
