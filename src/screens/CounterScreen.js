import { StyleSheet, Text, TextInput, View } from "react-native";
import React, { useState } from "react";
import CounterView from "../components/CounterView";
import CounterController from "../components/CounterController";
import { useDispatch, useSelector } from "react-redux";
import { setCustomValueAction } from "../Redux/Actions/Counter/CounterActions";

const CounterScreen = ({}) => {
  const [number, setNumber] = useState("");

  const handleNumberChange = (input) => {
    // Remove any non-numeric characters from the input
    const numericValue = input.replace(/[^0-9]/g, "");
    setNumber(numericValue);
  };
  const counter = useSelector((state) => state.counter);
  const dispatch = useDispatch();
  console.log(counter);
  return (
    <View style={styles.container}>
      <CounterView counterValue={counter.count} />
      <CounterController />
      <View style={{ alignItems: "center" }}>
        <TextInput
          value={counter.changeValue}
          keyboardType={"numeric"}
          style={{ borderWidth: 1, width: "80%", height: 40 }}
          onChangeText={(text) => {
            dispatch(setCustomValueAction(text));
            handleNumberChange(text);
          }}
        />
      </View>
    </View>
  );
};

export default CounterScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },
});
