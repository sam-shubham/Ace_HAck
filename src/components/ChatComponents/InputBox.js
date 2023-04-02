import { useState } from "react";
import {
  View,
  StyleSheet,
  TextInput,
  Image,
  TouchableOpacity,
} from "react-native";
import { AntDesign, MaterialIcons, Ionicons } from "@expo/vector-icons";
import { SafeAreaView } from "react-native-safe-area-context";
import socket from "../../utils/socket";

const InputBox = ({ send }) => {
  const [newMessage, setNewMessage] = useState("");

  const onSend = () => {
    send(newMessage);
    // console.warn("Sending a new message: ", newMessage);

    setNewMessage("");
  };

  return (
    <View edges={["bottom"]} style={styles.container} className="bg-red-600">
      {/* Icon */}
      {/* <AntDesign name="plus" size={20} color="royalblue" /> */}

      {/* Text Input */}
      <TextInput
        value={newMessage}
        onChangeText={setNewMessage}
        style={styles.input}
        placeholder="type your message..."
      />

      {/* Icon */}
      <TouchableOpacity
        style={{ elevation: 3 }}
        onPress={onSend}
        className="h-[40px] w-[70px] justify-center items-center bg-red-500 rounded-md"
      >
        <Image
          source={
            newMessage.trim().length <= 0
              ? require("../../../assets/mic.png")
              : require("../../../assets/paper-plane.png")
          }
          backgroundColor={"transparent"}
          // style={{ backgroundColor: "red" }}
          name="send"
          className="h-[23px] w-[23px]"
          color="red"
        />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    backgroundColor: "whitesmoke",
    padding: 8,
    paddingHorizontal: 10,
    alignItems: "center",
  },
  input: {
    flex: 1,
    backgroundColor: "white",
    padding: 8,
    paddingHorizontal: 10,
    marginHorizontal: 10,
    elevation: 1,

    borderRadius: 50,
    borderColor: "lightgray",
    borderWidth: StyleSheet.hairlineWidth,
  },
  send: {
    backgroundColor: "royalblue",
    padding: 15,

    // paddingHorizontal: 12,
    borderRadius: 30,
    overflow: "hidden",
  },
});

export default InputBox;
