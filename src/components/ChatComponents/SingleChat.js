import {
  View,
  Text,
  Platform,
  StatusBar,
  Image,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import React from "react";

const SingleChat = ({ message }) => {
  return (
    <View className=" justify-start">
      <View
        style={{
          width: "auto",
        }}
        className="/py-[10px] /px-[10px] w-auto bg-[#004efe]"
      >
        <Text
          style={{
            width: "auto",
          }}
          className=""
        >
          {message}
        </Text>
      </View>
    </View>
  );
};

export default SingleChat;
