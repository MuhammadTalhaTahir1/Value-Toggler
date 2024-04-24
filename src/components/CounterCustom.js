import { StyleSheet, Text, TextInput, View } from "react-native";
import React, { useState } from "react";

const CounterCustom = ({ setParentCostumValueState }) => {
  const [costumValue, setCostumValue] = useState("1");
  const applychanges = ( text ) => {
    setCostumValue(text);
    setParentCostumValueState(text)
  };
  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
      }}
    >
      <TextInput
        value={costumValue}
        style={{ borderWidth: 1, width: "80%", height: 40 }}
        onChangeText={(text) => applychanges(text)}
      />
    </View>
  );
};

export default CounterCustom;

const styles = StyleSheet.create({});
