import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import { useDispatch } from "react-redux";
import { decrementValueAction, incrementDecrementAction, incrementValueAction } from "../Redux/Actions/Counter/CounterActions";

const CounterController = () => {
  const dispatch = useDispatch();
  const incrementValue = () => {
    dispatch(incrementDecrementAction('increment'));
  };
  const decrementValue = () => {
    dispatch(incrementDecrementAction('decrement'));
  };
  return (
    <SafeAreaView>
      <View style={styles.view}>
        <TouchableOpacity
          style={styles.buttons}
          onPress={() => decrementValue()}
        >
          <Text style={styles.button_text}>Decrement</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.buttons}
          onPress={() => incrementValue()}
        >
          <Text style={styles.button_text}>Increment</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};
export default CounterController;
const styles = StyleSheet.create({
  view: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    padding: 10,
  },
  buttons: {
    backgroundColor: "#ADD8E6",
    padding: 20,
  },
  button_text: {
    fontSize: 15,
    color: "white",
  },
});
