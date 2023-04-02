import {
  ImageBackground,
  StyleSheet,
  FlatList,
  KeyboardAvoidingView,
  View,
  Text,
  Platform,
  ScrollView,
  StatusBar,
  Keyboard,
  Dimensions,
} from "react-native";

import React, { useEffect, useRef, useState } from "react";
import { LinearGradient } from "expo-linear-gradient";
// import msgs from "../../assets/data/messages.json";
import Message from "../src/components/ChatComponents/Message";
// import InputBox from "../src/components/ChatComponents/Input";
import { useRouter } from "expo-router";
import axios from "axios";
// import socket from "../src/utils/socket";
import InputBox from "../src/components/ChatComponents/InputBox";
import socket from "../src/utils/socket";
var MessageHistory = [];
// import * as Speech from "expo-speech";
// import Voice, {
//   SpeechRecognizedEvent,
//   SpeechResultsEvent,
//   SpeechErrorEvent,
// } from "@react-native-voice/voice";

const assistant = () => {
  const router = useRouter();
  const scrollViewRef = useRef(null);
  //   console.log(msgs.reverse());
  const [Messages, setMessages] = useState([]);
  const [BotTyping, setBotTyping] = useState(true);

  const speak = async (message) => {
    const thingToSay = message;
    Speech.VoiceQuality.Enhanced = "Enhanced";

    // let d = await Speech.getAvailableVoicesAsync();
    // console.log(d);
    Speech.speak(thingToSay, {
      pitch: 1,
      rate: 1.2,
    });
  };
  // const navigation = useNavigation();

  //   useEffect(() => {
  //   navigation.setOptions({ title: route.params.name });
  useEffect(() => {
    scrollViewRef.current.scrollToEnd({ animated: true });
  }, [Messages, BotTyping]);

  const [KeyboardStatus, setKeyboardStatus] = useState({
    visible: false,
    height: Platform.OS === "ios" ? 60 : 90,
  });

  // useEffect(() => {
  //   setMessages(msgs);
  // }, []);

  useEffect(() => {
    // console.log(socket.connected);
    socket.connect();
    if (socket.connected) socket.disconnect();

    socket.connect();

    socket.on("messageFromBot", async (message) => {
      // console.log(message.text);
      MessageHistory.push(message);
      // console.log(message.text, Messages.length);

      setMessages([...MessageHistory]);
      speak(message.text);
      // console.log(LoclMsg);
    });

    socket.on("typing", (typing) => {
      setBotTyping(typing);
    });
  }, []);

  // useEffect(() => {
  //   console.log(1, Messages.length);
  // }, [Messages]);

  async function sendHandler(message) {
    // if (message.trim().length <= 0) {
    //   console.log("Listen To Voice");

    //   await Voice.start("en-US");
    //   // Voice.onSpeechResults((e) => {
    //   //   console.log(e);
    //   // });

    //   return;
    // }

    let msg = {
      id: Math.random(),
      text: message,
      createdAt: new Date(),
      user: {
        id: "u1",
        name: "User",
      },
    };

    // speak(msg.text);

    MessageHistory.push(msg);
    console.log(MessageHistory);
    setMessages([...MessageHistory]);

    socket.emit("messageFromUser", message);
  }

  useEffect(() => {
    const keyboardDidShowListener = Keyboard.addListener(
      "keyboardDidShow",
      () => {
        // setKeyboardVisible(true); // or some other action
        console.log(Keyboard.metrics());
        setKeyboardStatus({ visible: true, height: Keyboard.metrics().height });
      }
    );

    const keyboardDidHideListener = Keyboard.addListener(
      "keyboardDidHide",
      () => {
        // setKeyboardVisible(false); // or some other action
        setKeyboardStatus({
          visible: false,
          height: Platform.OS === "ios" ? 60 : 90,
        });
      }
    );

    return () => {
      keyboardDidHideListener.remove();
      keyboardDidShowListener.remove();
    };
  }, []);

  return (
    <View
      className="w-full h-full"
      style={{
        paddingTop: Platform.OS == "android" ? StatusBar.currentHeight : 0,
        backgroundColor: "whitesmoke",
        paddingBottom: 10,
      }}
    >
      <StatusBar backgroundColor={"#FDBBD1"} />
      <View
        className="h-full w-full"
        // start={{ x: 0, y: 0 }}
        // end={{ x: 0, y: 1 }}
        // colors={["white", "white", "lightgray"]}
      >
        {/* <FlatList
            className="w-full h-full"
            data={Messages}
            renderItem={({ item }) => (
              <Text key={Math.random()}>{item.text}</Text>
            )}
          /> */}
        {/* {Messages.map((i) => (
            <Text key={Math.random()}>{i.text}</Text>
          ))}
          <InputBox send={sendHandler} /> */}
        {
          <KeyboardAvoidingView
            behavior={Platform.OS === "ios" ? "padding" : null}
            keyboardVerticalOffset={-15}
            // style={styles.bg}
            enabled
            // contentContainerStyle={{
            //   paddingBottom: -25,
            // }}
          >
            {/* {console.log(KeyboardStatus.height / 2.5)} */}
            <View className="w-full h-full">
              <View className="w-full h-[60px] bg-[#FDBBD1] flex-row items-center px-4">
                <View className="bg-gray-100 w-[48px] h-[48px] rounded-full justify-center items-center">
                  <Text
                    style={{
                      //   fontFamily: "Retrofunk Script",
                      shadowColor: "#FFFFFF",
                      // shadowRadius: 1,
                      shadowOpacity: 1,
                      textShadowColor: "#FFFFFF",
                      textShadowRadius: 10,
                      textShadowOffset: { width: -3, height: 3 },
                      // elevation: 20,
                    }}
                    className="text-[#F30000] text-[11.8px]  text-center -rotate-[10deg]"
                  >
                    Ai Chatbot
                  </Text>
                </View>
                <Text
                  // style={{ fontFamily: "KT Projekt Regular" }}
                  className="ml-3 font-[600] text-[16px] text-black"
                >
                  Personal Assistant
                </Text>
              </View>
              <ScrollView
                className="w-full h-full p-[10px]"
                ref={scrollViewRef}
                //   snapToAlignment={"end"}
                //   snapToEnd={true}
                //   snapToOffsets={{}}
                //   ini
                //   invertStickyHeaders
                contentContainerStyle={{ paddingBottom: 10 }}
                contentOffset={{
                  x: 0,
                  y: 99999,
                }}
                //   onContentSizeChange={
                //     () => {}
                //     // scrollViewRef.current.scrollToEnd({ animated: true })
                //   }
              >
                {Messages.map((item, index) => {
                  return (
                    <Message
                      key={item.id}
                      message={item}
                      last={index == Messages.length - 1}
                      next={Messages[index + 1]}
                    />
                  );
                })}
                {BotTyping && (
                  <Message
                    key={"gfchvbj"}
                    message={{ user: { id: "u2" } }}
                    last={true}
                    next={Messages[Messages.length - 1]}
                    isTyping={true}
                  />
                )}
              </ScrollView>
              {/* <FlatList
                data={messages.slice(0, 15)}
                renderItem={({ item }) => <Message message={item} />}
                style={styles.list}
                inverted
              /> */}
              <InputBox send={sendHandler} />
            </View>
          </KeyboardAvoidingView>
        }
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  bg: {
    // flex: 1,
    // paddingBottom: 0,
  },
  list: {
    padding: 10,
  },
});

export default assistant;
