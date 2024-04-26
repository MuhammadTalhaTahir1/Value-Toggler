import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import React, { useState } from "react";
import CounterView from "../components/CounterView";
import CounterController from "../components/CounterController";
import { useDispatch, useSelector } from "react-redux";
import { setCustomValueAction } from "../Redux/Actions/Counter/CounterActions";
import tailwind from "twrnc";
import { TextInput } from "react-native-paper";

const CounterScreen = ({ }) => {
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
    <SafeAreaView style={styles.container}>
      <View style={{
        height: '20%'
      }}>
        <Text style={tailwind`text-white underline text-3xl text-center pt-15`}>
         React Native Redux
        </Text>
      </View>
      <View style={styles.sbody}>
        <CounterView counterValue={counter.count} />
        <CounterController />
        <View style={{ alignItems: "center" }}>
          <TextInput
            value={counter.changeValue}
            keyboardType={"numeric"}
            // style={{ borderWidth: 1, width: "80%", height: 40 }}
            // style={tailwind`bg-[#292929] border-2 border-[#3e3e3e] rounded-lg text-white px-6 py-3 text-base`}
            onChangeText={(text) => {
              dispatch(setCustomValueAction(text));
              handleNumberChange(text);
            }}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default CounterScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: 'black'
  },
  sbody: {
    height: '80%',
    justifyContent: "center",
  }
});
