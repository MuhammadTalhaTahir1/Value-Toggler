import {
  Animated,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
  Easing
} from "react-native";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { decrementValueAction, incrementDecrementAction, incrementValueAction } from "../Redux/Actions/Counter/CounterActions";

const CounterController = () => {
  const [scaleValue1] = useState(new Animated.Value(1));
  const [scaleValue2] = useState(new Animated.Value(1));


  const animateButton=(scaleValue)=>{
    Animated.timing(scaleValue,{
      toValue:0.8,
      duration:200,
      useNativeDriver:true
    }).start(()=>{
      Animated.timing(scaleValue,{
        toValue:1,
        duration:200,
        useNativeDriver:true
      }).start();
    })
  }
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
        {/* Animation Button */}
        <TouchableWithoutFeedback onPress={() => { decrementValue(); animateButton(scaleValue1) }}>
          <Animated.View style={[styles.btton1, { transform: [{ scale: scaleValue1 }] }]}>
            <Text style={styles.button_text1}>Decrement</Text>
          </Animated.View>
        </TouchableWithoutFeedback>
        <TouchableWithoutFeedback onPress={() => { incrementValue(); animateButton(scaleValue2) }}>
          <Animated.View style={[styles.btton1, { transform: [{ scale: scaleValue2 }] }]}>
            <Text style={styles.button_text1}>Increment</Text>
          </Animated.View>
        </TouchableWithoutFeedback>

        {/* without animation buttons */}
        {/* <TouchableOpacity
          style={styles.buttons}
          onPress={() => decrementValue()}
        >
          <Text style={styles.button_text}>Decrement</Text>
        </TouchableOpacity> */}
        {/* <TouchableOpacity
          style={styles.buttons}
          onPress={() => incrementValue()}
        >
          <Text style={styles.button_text}>Increment</Text>
        </TouchableOpacity> */}
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
  btton1: {
    backgroundColor: "#333",
    padding: 20,
    borderRadius: 5,
    margin: 10,
    elevation: 5,
  },
  button_text1: {
    color: '#fff',
    fontSize: 20
  },
  button_text: {
    fontSize: 15,
    color: "white",
  },
});
