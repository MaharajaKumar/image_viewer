import {Colors} from "../../utilities/Colors";
import {Environment} from "../../config/Environment";
import {useState} from "react";
import {View, StyleSheet, Modal, Image, Text, Pressable} from "react-native";

export default function ImageViewer({
  dialogStatus,
  setDialogStatus,
  imageId,
  onCancel,
}) {
  const [isModalVisible, setModalVisible] = useState(dialogStatus);

  const toggleModalVisibility = () => {
    setModalVisible(!isModalVisible);
    setDialogStatus(!dialogStatus);
    onCancel();
  };

  return (
    <View style={styles.screen}>
      <Modal
        animationType="fade"
        transparent
        visible={isModalVisible}
        presentationStyle="overFullScreen"
        onDismiss={toggleModalVisibility}>
        <View style={styles.viewWrapper}>
          <View style={styles.modalView}>
            <View style={styles.icon}>
              <Text style={styles.titleText}>Image View</Text>
              <Pressable
                style={styles.iconOuterContainer}
                onPress={toggleModalVisibility}>
                <Image
                  style={styles.iconContainer}
                  source={require("../../assets/icons/close.png")}
                />
              </Pressable>
            </View>
            <Image
              resizeMode="cover"
              style={styles.imageContainer}
              source={{uri: `${Environment.baseUrl}id/${imageId}/300/300`}}
            />
          </View>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  viewWrapper: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(0, 0, 0, 0.8)",
  },
  modalView: {
    position: "absolute",
    elevation: 5,
    backgroundColor: "#fff",
    borderRadius: 7,
  },
  icon: {
    justifyContent: "space-between",
    alignItems: "center",
    padding: 10,
    // marginBottom: 10,
    flexDirection: "row",
  },
  imageContainer: {
    width: 300,
    height: 300,
    alignItems: "center",
    justifyContent: "center",
    overflow: "hidden",
    borderBottomLeftRadius: 7,
    borderBottomRightRadius: 7,
  },
  iconContainer: {
    height: 15,
    width: 15,
  },
  iconOuterContainer: {
    height: 25,
    width: 25,
    alignItems: "center",
    justifyContent: "center",
  },
  titleText: {
    fontSize: 16,
    fontWeight: "bold",
    color: Colors.textBlack,
  },
});
