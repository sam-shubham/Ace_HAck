import { Slot, useRouter } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { useEffect } from "react";
import { Text } from "react-native";

const _layout = () => {
  const router = useRouter();

  useEffect(() => {
    // router.push("/home");
    setTimeout(() => {
      router.push("/home");
    }, 2000);
  }, []);

  return (
    <>
      <StatusBar animated style="light" />
      <Slot initialRouteName="home"></Slot>
    </>
  );
};

export default _layout;
