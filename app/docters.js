import { View, Text, TouchableOpacity, Image } from "react-native";
import React from "react";

const docters = () => {
  return (
    <View classname="w-full h-full py-7 flex-col items-center">
      <View className="w-[100%] mt-[100px] bg-white rounded-2xl flex-row items-center px-4 py-4 justify-between">
        <View className="flex-col">
          <Text className="font-bold">{"Dr. Rao"}</Text>
          <Text className="font-light text-xs">{"+916565656565"}</Text>
        </View>
        <TouchableOpacity className="bg-blue-800 px-4 py-1 rounded-full">
          <Text className="text-white font-[500] text-[14px] ">{"Call"}</Text>
        </TouchableOpacity>
      </View>
      <View className="w-[100%] mt-3 bg-white rounded-2xl flex-row items-center px-4 py-4 justify-between">
        <View className="flex-col">
          <Text className="font-bold">{"Dr Shyam"}</Text>
          <Text className="font-light text-xs">{"+916245656559"}</Text>
        </View>
        <TouchableOpacity
          onLongPress={() => {}}
          className="bg-blue-800 px-4 py-1 rounded-full"
        >
          <Text className="text-white font-[500] text-[14px] ">{"Call"}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default docters;
