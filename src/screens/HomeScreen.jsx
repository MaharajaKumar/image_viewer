import TitleContainer from "../components/title_containers/TitleContainer";
import {useFetchImagesListDataQuery} from "../redux/rtk_query/apiSlice";
import ImageViewer from "../components/image_viewer/ImageViewer";
import ImageCarousel from "../components/image_carousel/ImageCarousel";
import SearchBar from "../components/search_bar/SearchBar";
import {Colors} from "../utilities/Colors";
import {useState} from "react";
import {
  View,
  StyleSheet,
  Text,
  Alert,
  ToastAndroid,
  Platform,
} from "react-native";

export default function HomeScreen({navigation}) {
  const [imageId, setImageId] = useState("");
  const [imageViewerStatus, setImageViewerStatus] = useState(false);
  const {data, error, isLoading, refetch} =
    useFetchImagesListDataQuery(`v2/list`);

  function NavToImageViewScreen(id) {
    navigation.navigate("Image_View", {id: id});
    setImageId("");
  }

  function ShowImage() {
    if (imageId == "") {
      if (Platform.OS == "android") {
        ToastAndroid.show("Check search id", ToastAndroid.SHORT);
      } else if (Platform.OS == "ios") {
        Alert.alert("Alert", "Check search id");
      }
      return;
    }
    setImageViewerStatus(true);
  }

  return (
    <View style={styles.screenContainer}>
      <TitleContainer title="Image Gallery" />
      <View style={styles.searchBarContainer}>
        <SearchBar
          placeholder="Search..."
          onChangeText={setImageId}
          value={imageId}
          onPressSearch={() => {
            ShowImage();
          }}
        />
      </View>
      {data && data.length > 0 && (
        <ImageCarousel
          data={data}
          onPressInfo={id => {
            NavToImageViewScreen(id);
          }}
        />
      )}
      {isLoading && (
        <View style={styles.loadingContainer}>
          <Text style={styles.infoText}>Loading...</Text>
        </View>
      )}
      {error && (
        <View style={styles.loadingContainer}>
          <Text
            style={styles.infoText}>{`${error.code} ${error.message}`}</Text>
        </View>
      )}
      {imageViewerStatus && (
        <ImageViewer
          dialogStatus={imageViewerStatus}
          setDialogStatus={setImageViewerStatus}
          imageId={imageId}
          onCancel={() => {
            setImageId("");
          }}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
  },
  loadingContainer: {
    alignItems: "center",
    justifyContent: "center",
  },
  infoText: {
    fontSize: 14,
    color: Colors.textGray,
  },
  searchBarContainer: {
    marginBottom: 20,
  },
});
