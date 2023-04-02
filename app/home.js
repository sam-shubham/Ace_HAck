import {
  View,
  Text,
  FlatList,
  StatusBar,
  Image,
  TouchableOpacity,
} from "react-native";
import React, { useState, useRef } from "react";
import { LinearGradient } from "expo-linear-gradient";
import {
  AntDesign,
  FontAwesome5,
  Entypo,
  Fontisto,
  Ionicons,
  Foundation,
} from "@expo/vector-icons";
// import { expo } from "expo";

import {
  // Colors,
  // BottomBar2,
  // StoreScreen,
  Prefrence,
  // ChatsSection,
  // CateogriesModal,
  // RecipiesSection,
} from "../src/components";
import AnimatedLottieView from "lottie-react-native";

const home = () => {
  const CateogrySections = useRef();
  const [CateogryDatas, setCateogryDatas] = useState([]);
  const [User, setUser] = useState({ name: "Sam" });

  // console.log("hhhh");

  return (
    // <View>
    <View
      style={{
        // paddingTop: Platform.OS == "android" ? StatusBar.currentHeight : 0,
        paddingTop: StatusBar.currentHeight,
      }}
      className="w-full h-full items-center justify-start flex flex-col  bg-[#ccdce9] /bg-gray-300 /bg-[#FDBBD1]"
    >
      <StatusBar backgroundColor={"#ccdce9"} barStyle="dark-content" />

      <Text className="text-4xl mt-9 ">{`Hi, ${User.name}!`}</Text>
      <View className="flex flex-row mt-8 items-center justify-evenly w-[80%]">
        <TouchableOpacity
          style={{ elevation: 8 }}
          className=" bg-white h-[60px] w-[60px] items-center justify-center rounded-full"
        >
          <Fontisto name="stethoscope" size={25} color="black" />
        </TouchableOpacity>
        <TouchableOpacity
          style={{ elevation: 8 }}
          className=" bg-white h-[60px] w-[60px] items-center justify-center rounded-full"
        >
          <Ionicons name="call-outline" size={25} color="black" />
        </TouchableOpacity>
        <TouchableOpacity
          style={{ elevation: 8 }}
          className=" bg-white h-[60px] w-[60px] items-center justify-center rounded-full"
        >
          <Entypo name="chat" size={25} color="black" />
        </TouchableOpacity>
        <TouchableOpacity
          style={{ elevation: 8 }}
          className=" bg-white h-[60px] w-[60px] items-center justify-center rounded-full"
        >
          <AntDesign name="book" size={25} color="black" />
        </TouchableOpacity>
      </View>

      <View
        className="w-[90%] h-[40%] items-center justify-center rounded-2xl bg-white mt-8"
        style={{ elevation: 1 }}
      >
        <AnimatedLottieView
          className="w-[280px] h-[280px]"
          style={{ backgroundColor: "transparent" }}
          autoPlay
          loop
          backgroundColor="transparent"
          // duration={8000}
          speed={0.6}
          // autoSize
          resizeMode="cover"
          source={require("./../assets/doctor.json")}
        />
      </View>

      <View className="w-[90%] mt-8 bg-white rounded-2xl flex-row items-center px-4 py-4 justify-between">
        <View className="flex-col">
          <Text className="font-bold">
            {"Medical Consultation With Dr. Rao"}
          </Text>
          <Text className="font-light text-xs">{"Yesterday, 11:27pm"}</Text>
        </View>
        <TouchableOpacity className="bg-blue-800 px-4 py-1 rounded-full">
          <Text className="text-white font-[500] text-[14px] ">{"View"}</Text>
        </TouchableOpacity>
      </View>
      <View className="w-[90%] mt-3 bg-white rounded-2xl flex-row items-center px-4 py-4 justify-between">
        <View className="flex-col">
          <Text className="font-bold">{"Eye Test at Anand Lab"}</Text>
          <Text className="font-light text-xs">{"Yesterday, 11:27pm"}</Text>
        </View>
        <TouchableOpacity className="bg-blue-800 px-4 py-1 rounded-full">
          <Text className="text-white font-[500] text-[14px] ">{"Print"}</Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity
        // disabled={Processing}
        onPress={() => {
          console.log(UserInputData);
          if (UserInputData.email && UserInputData.password) {
            login();
          }
        }}
        style={{
          elevation: 8,
        }}
        className="bg-[#006be6] justify-center items-center rounded-2xl mt-7 w-[80%] h-[65px]"
      >
        <Text className="text-white font-semibold text-lg">
          {"Chat with Virtual Doctor"}
        </Text>
      </TouchableOpacity>

      {/* <Image
        source={require("./../assets/e.png")}
        className="w-full h-full"
        resizeMode="contain"
      /> */}
      {/* <Text className="text-black ">Hello</Text> */}
      {/* <Modal animationType="slide" visible={CateogriesModalVisible}>
        <CateogriesModal data={{setCateogriesModalVisible}} />
      </Modal> */}

      {/* <TouchableOpacity className="bg-gray-100 w-[40px] h-[40px] items-center justify-center rounded-lg">
            <Ionicons
              name="add-circle-outline"
              size={27}
              color={Colors.secondry}
            />
          </TouchableOpacity> */}
      <View
        // onScrollToTop={() => {
        //   console.log('yes');
        // }}
        // onScroll={(d) => {
        //   if (d?.nativeEvent?.contentOffset?.y > 60) {
        //     setScrolledTop(false);
        //   } else {
        //     setScrolledTop(true);
        //   }
        //   //  console.log(d['nativeEvent']);
        // }}
        style={{
          width: "100%",
        }}
      >
        {/* <PostsSection /> */}
        {/* <RecipiesSection
              Data={NewThisWeek}
              Heading={'New ThisWeek'}
              navigation={navigation}
            /> */}
        <FlatList
          ref={CateogrySections}
          style={{ width: "100%" }}
          // className="h-full"
          // onScroll={(d) => {
          //   if (d?.nativeEvent?.contentOffset?.y > 60) {
          //     setScrolledTop(false);
          //   } else {
          //     setScrolledTop(true);
          //   }
          //   //  console.log(d['nativeEvent']);
          // }}
          data={CateogryDatas}
          keyExtractor={() => Math.random()}
          scrollEnabled={true}
          renderItem={({ item, index }) => (
            <>
              {index == 0 ? (
                <Prefrence
                  cateogrySelected={cateogrySelected}
                  data={{ setCateogriesModalVisible }}
                />
              ) : null}
              {/* {CateogryDatas.map(item => ( */}
              {/* <RecipiesSection
                key={Math.random()}
                Data={item.data}
                last={index == CateogryDatas.length - 1}
                Heading={item.name}
                // navigation={navigation}
              /> */}
            </>
          )}
        />
        {/* ))} */}
      </View>

      {/* <Text className="text-black">User home</Text> */}
      {/* <Text className="text-black">User home</Text> */}
    </View>
    // </View>
  );
};

export default home;
