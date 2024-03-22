import {Colors} from "../../utilities/Colors";
import {View, Text, StyleSheet} from "react-native";

const ColumnLabelText = ({label, value}) => {
  return (
    <View style={styles.columnContainer}>
      <Text style={styles.titleText}>{label}</Text>
      <Text style={styles.dataText}>{value}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  columnContainer: {
    flexDirection: "column",
    gap: 4,
  },
  titleText: {
    fontSize: 16,
    fontWeight: "bold",
    color: Colors.textBlack,
  },
  dataText: {
    fontSize: 14,
    color: Colors.textGray,
  },
});

export default ColumnLabelText;
