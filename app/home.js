import { View, Text, FlatList, StatusBar, Image } from "react-native";
import React, { useState, useRef } from "react";
import { LinearGradient } from "expo-linear-gradient";

import {
  // Colors,
  // BottomBar2,
  // StoreScreen,
  Prefrence,
  // ChatsSection,
  // CateogriesModal,
  // RecipiesSection,
} from "../src/components";

const home = () => {
  const CateogrySections = useRef();
  const [CateogryDatas, setCateogryDatas] = useState([]);

  // console.log("hhhh");

  return (
    // <View>
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
