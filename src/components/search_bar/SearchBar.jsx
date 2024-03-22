import {Colors} from "../../utilities/Colors";
import {TextInput, StyleSheet, View, Image, Pressable} from "react-native";

export default function SearchBar({
  value,
  onChangeText,
  placeholder,
  onPressSearch,
}) {
  return (
    <View style={styles.mainContainer}>
      <View style={styles.textInputContainer}>
        <TextInput
          style={styles.formTextInput}
          placeholder={placeholder}
          placeholderTextColor={Colors.textGray}
          numberOfLines={1}
          keyboardType="phone-pad"
          value={value}
          editable={true}
          onChangeText={onChangeText}
          autoCapitalize={"none"}
          autoComplete="off"
          autoCorrect={false}
          autoFocus={false}
          inputMode="numeric"
        />
      </View>
      <Pressable
        style={styles.searchIconButtonContainer}
        onPress={onPressSearch}>
        <Image
          style={styles.searchIconImageContainer}
          source={require("../../assets/icons/search.png")}
        />
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginRight: 25,
  },
  textInputContainer: {
    width: "80%",
    height: 40,
    backgroundColor: Colors.containerGray,
    justifyContent: "center",
    borderTopRightRadius: 8,
    borderBottomRightRadius: 8,
  },
  formTextInput: {
    paddingVertical: 6,
    paddingHorizontal: 15,
    fontSize: 12,
    color: "black",
  },
  searchIconImageContainer: {
    width: 15,
    height: 15,
  },
  searchIconButtonContainer: {
    width: 40,
    height: 40,
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: Colors.containerGray,
  },
});
