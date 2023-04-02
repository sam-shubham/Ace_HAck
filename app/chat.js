import {
  View,
  Text,
  Platform,
  StatusBar,
  Image,
  TouchableOpacity,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import React, { useState } from "react";
import SingleChat from "../src/components/ChatComponents/SingleChat";

const chat = () => {
  const [chats, setchats] = useState(["hey", "hello"]);
  return (
    <View>
      <View
        style={{
          marginTop: Platform.OS == "android" ? StatusBar.currentHeight : 0,
        }}
        className="h-1/2bg-blue-400 /px-[1rem]"
      >
        <View className="px-[15px] py-[20px] ">
          <View className="flex-row w-full justify-between items-center">
            <View className="flex-row items-center gap-[10px]">
              {/* <Ionicons
                name="chevron-back"
                size={28}
                color="rgb(156,163,175)"
              /> */}
              <Image
                resizeMode="stretch"
                className="w-[50px] h-[50px]"
                source={require("./../assets/botimage.png")}
              />
              <View className="ml-[12px]">
                <Text className="text-black text-xl">Ai Chatbot</Text>
                <Text className=" font-light text-gray-400">Online</Text>
              </View>
            </View>
            <View className="flex items-center">
              <View className="flex-row gap-[18px] text-gray-400">
                <TouchableOpacity>
                  <Feather name="video" size={26} color="rgb(156,163,175)" />
                </TouchableOpacity>
                <TouchableOpacity>
                  <Ionicons
                    name="ios-call"
                    size={26}
                    color="rgb(156,163,175)"
                  />
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
        <View
          style={{
            width: "auto",
          }}
          className="w-auto"
        >
          {chats.map((el) => (
            <SingleChat key={Math.random() + JSON.stringify(el)} message={el} />
          ))}
        </View>
      </View>
    </View>
  );
};

export default chat;
