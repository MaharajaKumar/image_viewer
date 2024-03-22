import {useFetchImagesListDataQuery} from "../redux/rtk_query/apiSlice";
import ColumnLabelText from "../components/label_text/ColumnLabelText";
import {Colors} from "../utilities/Colors";
import {View, StyleSheet, Image, Pressable} from "react-native";

export default function ImageViewScreen({route, navigation}) {
  const {data, error, isLoading, refetch} = useFetchImagesListDataQuery(
    `id/${route.params.id}/info`,
  );

  const goBack = () => {
    navigation.goBack();
  };

  return (
    <View style={styles.screenContainer}>
      {data && (
        <View style={styles.mainContainer}>
          <View style={styles.imageOuterContainer}>
            <Image
              resizeMode="cover"
              style={styles.imageInnerContainer}
              source={{uri: data.download_url}}></Image>
          </View>
          <View style={styles.contentContainer}>
            <ColumnLabelText label="Author" value={data.author} />
            <ColumnLabelText label="Width" value={`${data.width} px`} />
            <ColumnLabelText label="Height" value={`${data.height} px`} />
            <ColumnLabelText label="URL" value={data.url} />
            <ColumnLabelText label="Download" value={data.download_url} />
          </View>
        </View>
      )}
      <Pressable style={styles.backButtonContainer} onPress={goBack}>
        <Image
          style={styles.backArrowButton}
          source={require("../assets/icons/back_arrow.png")}
          tintColor={Colors.backButtonIconColor}
        />
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
  },
  mainContainer: {
    flex: 1,
    width: "100%",
    height: "100%",
  },
  imageOuterContainer: {
    width: "100%",
    height: "50%",
  },
  imageInnerContainer: {
    width: "100%",
    height: "100%",
  },
  contentContainer: {
    width: "100%",
    height: "55%",
    backgroundColor: Colors.containerWhite,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    position: "absolute",
    bottom: 0,
    paddingVertical: 25,
    paddingHorizontal: 15,
    flexDirection: "column",
    justifyContent: "space-between",
  },
  backButtonContainer: {
    position: "absolute",
    top: 15,
    left: 5,
    width: 45,
    height: 45,
    borderRadius: 50,
    alignItems: "center",
    justifyContent: "center",
  },
  backArrowButton: {
    width: 20,
    height: 20,
  },
});
