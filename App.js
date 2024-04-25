import { StyleSheet, Text, View } from "react-native";
import { Provider } from "react-redux";
import { store } from "./src/Redux/store";
import CounterScreen from "./src/screens/CounterScreen";
import tw from "twrnc";
export default function App() {
  return (
    <Provider store={store} style={styles.container}>
      <CounterScreen />
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },
});
