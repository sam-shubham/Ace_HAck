import {
  View,
  Text,
  Image,
  ImageBackground,
  TouchableOpacity,
  // Platform,
  StatusBar,
  TextInput,
} from "react-native";
import React, { useEffect, useState } from "react";
import { AntDesign, FontAwesome5, Entypo } from "@expo/vector-icons";
// import { StatusBar } from "expo-status-bar";
import { useRouter } from "expo-router";
import LottieView from "lottie-react-native";

const login = () => {
  const [navState, setnavState] = useState("intro");
  const [passwordVisible, setpasswordVisible] = useState(false);
  const [Processing, setProcessing] = useState(false);
  const router = useRouter();
  useEffect(() => {
    setnavState("register");
  }, []);

  return (
    <View
      source={require("./../assets/splashbg.jpg")}
      className="w-full relative h-full bg-blue-100 items-center flex-col"
      style={
        {
          // paddingTop: Platform.OS == "android" ? StatusBar.currentHeight : 0,
        }
      }
    >
      <StatusBar
        style="dark"
        backgroundColor="rgb(219,234,254)"
        barStyle="dark-content"
      />
      {navState == "intro" ? (
        <>
          <View
            className="w-[95%] mt-2 rounded-2xl flex-col items-center justify-center h-[45%] bg-[#006be6]"
            style={{ elevation: 5 }}
          >
            <Image
              source={require("./../assets/e.png")}
              className="w-[95%] h-[95%] rounded-2xl"
            />
          </View>
          <View className="w-full flex-1  items-center justify-center flex-col">
            <Text
              className="font-bold max-w-[80%] text-center text-[18px] "
              style={{ lineHeight: 20 }}
            >
              {"Simple, Secure and speedy healthcare at your fingertips."}
            </Text>
            <Text
              className="font-light mt-2 max-w-[60%] text-gray-500 text-center text-[13px] "
              style={{ lineHeight: 15 }}
            >
              {
                "Our app offers remote access to medical professionals, so you can get the care you need without leaving home."
              }
            </Text>
            <View className="w-[85%] h-[60px] bg-blue-300 rounded-xl mt-9 flex-row justify-between">
              <TouchableOpacity
                className="bg-blue-200 flex-col justify-center items-center /border-[1px] /border-[#0002] w-[50%] h-full rounded-xl"
                style={{ elevation: 0 }}
              >
                <Text className="font-semibold text-[15px]">{"Login"}</Text>
              </TouchableOpacity>
              <TouchableOpacity
                className="bg-transparent flex-col justify-center items-center w-[50%] /border-[1px] border-[#0002] h-full rounded-md"
                style={{ elevation: 0 }}
              >
                <Text className="font-semibold text-[15px]">{"Register"}</Text>
              </TouchableOpacity>
            </View>
          </View>
        </>
      ) : navState == "login" ? (
        <>
          <View className="justify-center flex-1 w-full flex-col items-center">
            <Text
              className="font-bold max-w-[80%] text-center text-[27px] "
              style={{ lineHeight: 30 }}
            >
              {"Hello Again!"}
            </Text>
            <Text
              className="font-light max-w-[70%] mt-1 text-center text-[22px] "
              style={{ lineHeight: 25 }}
            >
              {"Welcome back you've been missed!"}
            </Text>

            <TextInput
              className="w-[80%] mt-[60px] px-5 bg-blue-200 rounded-lg h-[65px]"
              placeholder="E-mail"
            />
            <View className=" relative flex-row justify-center">
              <TextInput
                secureTextEntry={!passwordVisible}
                className="w-[80%] mt-4 px-5 bg-blue-200 rounded-lg h-[65px]"
                placeholder="Password"
                textContentType="password"
              />
              <TouchableOpacity
                onPress={() => {
                  setpasswordVisible(!passwordVisible);
                }}
                className="absolute top-[46%] /bg-gray-500 right-4"
              >
                <Entypo
                  color={"rgb(107,114,100)"}
                  name={passwordVisible ? "eye-with-line" : "eye"}
                  size={25}
                />
              </TouchableOpacity>
            </View>
            <TouchableOpacity
              style={{
                elevation: 8,
              }}
              className="bg-[#006be6] justify-center items-center rounded-lg mt-9 w-[80%] h-[65px]"
            >
              <Text className="text-white font-semibold text-lg">
                {"Login"}
              </Text>
            </TouchableOpacity>
            <View className="flex flex-row mt-3 font-light justify-center items-center">
              <Text>{"Not A member?"}</Text>
              <TouchableOpacity
                onPress={() => {
                  setnavState("register");
                }}
              >
                <Text className="text-[#006be6] font-[500] pl-2 ">
                  {"Register Now"}
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </>
      ) : navState == "register" ? (
        <>
          <View className="justify-center flex-1 w-full flex-col items-center">
            <Text
              className="font-bold max-w-[80%] text-center text-[27px] "
              style={{ lineHeight: 30 }}
            >
              {"Welcome Friend!"}
            </Text>
            <Text
              className="font-light max-w-[80%] mt-1 text-center text-[22px] "
              style={{ lineHeight: 25 }}
            >
              {"Join us and elevate your healthy journey today!"}
            </Text>

            <TextInput
              className="w-[80%] mt-[60px] px-5 bg-blue-200 rounded-lg h-[65px]"
              placeholder="Name"
            />
            <TextInput
              className="w-[80%] mt-4 px-5 bg-blue-200 rounded-lg h-[65px]"
              placeholder="E-mail"
            />
            <View className=" relative flex-row justify-center">
              <TextInput
                secureTextEntry={!passwordVisible}
                className="w-[80%] mt-4 px-5 bg-blue-200 rounded-lg h-[65px]"
                placeholder="Password"
                textContentType="password"
              />
              <TouchableOpacity
                onPress={() => {
                  setpasswordVisible(!passwordVisible);
                }}
                className="absolute top-[46%] /bg-gray-500 right-4"
              >
                <Entypo
                  color={"rgb(107,114,100)"}
                  name={passwordVisible ? "eye-with-line" : "eye"}
                  size={25}
                />
              </TouchableOpacity>
            </View>
            {/* <TextInput
            secureTextEntry
              className="w-[80%] mt-4 px-5 bg-blue-200 rounded-lg h-[65px]"
              placeholder="Confirm Password"
            /> */}
            <TouchableOpacity
              style={{
                elevation: 8,
              }}
              className="bg-[#006be6] justify-center items-center rounded-lg mt-9 w-[80%] h-[65px]"
            >
              <Text className="text-white font-semibold text-lg">
                {"Register"}
              </Text>
            </TouchableOpacity>
            <View className="flex flex-row mt-3 font-light justify-center items-center">
              <Text>{"Already A member?"}</Text>
              <TouchableOpacity
                onPress={() => {
                  setnavState("login");
                }}
              >
                <Text className="text-[#006be6] font-[500] pl-2 ">
                  {"Login Now"}
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </>
      ) : (
        <></>
      )}
      {/* <Text className="text-white" style={{ backgroundColor: "transparent" }}>
        Home Splash
      </Text> */}
      {/* <View className="w-full mt-[60%] flex-row px-5 items-center">
        <View
          className="p-2 bg-black rounded-[14px] drop-shadow-xl"
          style={{ elevation: 5 }}
        >
          <Image
            className="w-[60px]  h-[60px] "
            resizeMode="contain"
            source={require("./../assets/logo.png")}
          />
        </View>
      </View>
      <Text
        className="font-[600] mt-4 pl-5 text-green-900 max-w-[85%] text-[38px]"
        style={{
          lineHeight: 36,
        }}
      >
        {"We Are Preparing Something Great For You:"}
      </Text>

      <View className=" w-full items-center  pt-[20%] flex-col px-5 gap-y-4">
        <TouchableOpacity
          style={{ elevation: 5 }}
          className="flex-row items-center w-full h-[65px] px-8 rounded-full bg-gray-200"
        >
          <AntDesign name="apple1" size={28} color="gray" />
          <Text className="text-gray-800 font-medium ml-[50px] text-[16px]">
            {"Continue With Apple"}
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{ elevation: 5 }}
          className="flex-row items-center w-full h-[65px] px-8 rounded-full bg-white"
        >
          <AntDesign name="google" size={28} color="blue" />
          <Text className="text-blue-500 font-medium ml-[50px] text-[16px]">
            {"Continue With Google"}
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            // console.log("hhhh");
            router.push("/home");
          }}
          style={{ elevation: 5 }}
          className="flex-row items-center w-full h-[65px] px-8 rounded-full bg-blue-700"
        >
          <FontAwesome5 name="facebook" size={28} color="white" />
          <Text className="text-white font-medium ml-[50px] text-[16px]">
            {"Continue With Facebook"}
          </Text>
        </TouchableOpacity>
      </View>
      <Text className="w-full mt-5 text-[13px] text-gray-600 px-[10%] text-center">
        By continuing. you accept the TermsOfUse and PrivacyPolicy
      </Text> */}

      {true && (
        <>
          <StatusBar backgroundColor={"#0005"} />
          <View
            style={
              {
                // marginTop: Platform.OS == "android" ? StatusBar.currentHeight : 0,
              }
            }
            className=" absolute w-full h-full flex-1 items-center justify-center bg-[#0005]"
          >
            <View className="w-[80%] h-[30%] rounded-xl bg-blue-100  flex-col items-center justify-center">
              <LottieView
                autoPlay
                // ref={animation}
                autoSize
                resizeMode="cover"
                style={{
                  width: 100,
                  height: 100,
                  backgroundColor: "transparent",
                }}
                // Find more Lottie files at https://lottiefiles.com/featured
                source={require("./../assets/heart-loading.json")}
              />
              <Text className="font-normal mt-2 italic text-lg">
                {"Analyzing..."}
              </Text>
            </View>
          </View>
        </>
      )}
    </View>
  );
};

export default login;
