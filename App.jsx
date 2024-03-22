import {StyleSheet, StatusBar} from "react-native";
import {Provider} from "react-redux";
import ReduxStore from "./src/redux/store/ReduxStore";
import {SafeAreaView} from "react-native-safe-area-context";
import Navigator from "./src/navigator/Navigator";

export default function App() {
  return (
    <Provider store={ReduxStore}>
      <StatusBar animated={true} backgroundColor="black" />
      <SafeAreaView style={styles.appContainer}>
        <Navigator />
      </SafeAreaView>
    </Provider>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
  },
});
