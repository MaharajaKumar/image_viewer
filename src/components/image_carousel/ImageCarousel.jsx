import Carousel from "react-native-reanimated-carousel";
import {Image, StyleSheet, View, Text, TouchableOpacity} from "react-native";
import {Colors} from "../../utilities/Colors";

const ImageCarousel = ({data, onPressInfo}) => {
  return (
    <View style={styles.carouselOuterContainer}>
      <Carousel
        style={styles.carouselInnerContainer}
        width={280}
        height={210}
        pagingEnabled={true}
        snapEnabled={false}
        mode="horizontal-stack"
        loop={false}
        autoPlay={false}
        autoPlayReverse={false}
        data={data}
        modeConfig={{
          snapDirection: "left",
          stackInterval: 30,
        }}
        customConfig={() => ({type: "positive", viewCount: 3})}
        renderItem={({index, item}) => (
          <View key={index} style={styles.carouselItemContainer}>
            <Image
              resizeMode="cover"
              style={styles.imageContainer}
              source={{uri: item.download_url}}
            />
            <View style={styles.contentContainer}>
              <TouchableOpacity
                style={styles.infoButton}
                onPress={() => {
                  onPressInfo(item.id);
                }}>
                <Text style={styles.buttonText}>Info</Text>
              </TouchableOpacity>
              <Text numberOfLines={1} style={styles.authorText}>
                {item.author}
              </Text>
            </View>
          </View>
        )}
      />
      <View style={styles.totalContainer}>
        <Text style={styles.totalText}>{`Total: ${data.length}`}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  carouselOuterContainer: {
    width: "100%",
    paddingHorizontal: 15,
  },
  carouselInnerContainer: {
    width: "100%",
    height: 340,
  },
  carouselItemContainer: {
    width: "80%",
    height: 340,
    borderRadius: 20,
    backgroundColor: Colors.containerBlack,
    flexDirection: "column",
    justifyContent: "space-between",
    elevation: 2,
  },
  imageContainer: {
    width: "100%",
    height: 280,
    borderRadius: 20,
  },
  contentContainer: {
    height: 60,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 15,
    gap: 5,
  },
  totalContainer: {
    alignItems: "flex-end",
  },
  totalText: {
    fontSize: 14,
    color: Colors.textGray,
  },
  authorText: {
    fontSize: 14,
    fontWeight: "bold",
    color: Colors.textWhite,
  },
  infoButton: {
    borderRadius: 8,
    paddingHorizontal: 15,
    paddingVertical: 5,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: Colors.buttonBlue,
  },
  buttonText: {
    fontSize: 14,
    color: Colors.textWhite,
  },
});

export default ImageCarousel;
