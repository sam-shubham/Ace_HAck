import {
  Image,
  ImageBackground,
  StyleSheet,
  StatusBar,
  Text,
  View,
} from "react-native";

export default function Page() {
  return (
    <View
      style={{
        // paddingTop: Platform.OS == "android" ? StatusBar.currentHeight : 0,
        paddingTop: StatusBar.currentHeight,
      }}
      className="w-full h-full items-center justify-center flex flex-col  bg-[#006be6] /bg-gray-300 /bg-[#FDBBD1]"
    >
      <StatusBar backgroundColor={"#006be6"} />
      <Image
        source={require("./../assets/e.png")}
        className="w-full h-full"
        resizeMode="contain"
      />
    </View>
    // <ImageBackground
    //   source={require("./../assets/splashbg.jpg")}
    //   className="w-full h-full bg-emerald-400 justify-center items-center"
    // >
    //   {/* <Text className="text-white" style={{ backgroundColor: "transparent" }}>
    //     Home Splash
    //   </Text> */}
    //   <Image
    //     className="w-[60%] mt-[20%] ml-[3%] h-[50%]"
    //     resizeMode="contain"
    //     source={require("./../assets/e.png")}
    //   />
    // </ImageBackground>
    // <View style={styles.container}>
    //   <View style={styles.main}>
    //     <Text style={styles.title}>Hello World</Text>
    //     <Text style={styles.subtitle}>This is the first page of your app.</Text>
    //   </View>
    // </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    padding: 24,
  },
  main: {
    flex: 1,
    justifyContent: "center",
    maxWidth: 960,
    marginHorizontal: "auto",
  },
  title: {
    fontSize: 64,
    fontWeight: "bold",
  },
  subtitle: {
    fontSize: 36,
    color: "#38434D",
  },
});
