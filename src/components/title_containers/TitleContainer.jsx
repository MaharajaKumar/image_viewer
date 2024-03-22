import {memo} from "react";
import {Colors} from "../../utilities/Colors";
import {View, Text, StyleSheet} from "react-native";

const TitleContainer = memo(function TitleContainer({title}) {
  return (
    <View style={styles.outerContainer}>
      <Text style={styles.titleText}>{title}</Text>
    </View>
  );
});

const styles = StyleSheet.create({
  outerContainer: {
    paddingVertical: 25,
    alignItems: "center",
    justifyContent: "center",
  },
  titleText: {
    fontSize: 24,
    fontWeight: "bold",
    color: Colors.textBlack,
  },
});

export default TitleContainer;
