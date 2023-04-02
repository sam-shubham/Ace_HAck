import { Slot, useRouter } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { useEffect } from "react";
import { Text } from "react-native";
import * as SecureStore from "expo-secure-store";

const _layout = () => {
  const router = useRouter();

  useEffect(() => {
    router.push("/home");

    // setTimeout(() => {
    //   (async () => {
    //     let user = await SecureStore.getItemAsync("user");
    //     if (!user) return router.replace("/login");
    //     return router.replace("/home?name=" + JSON.parse(user).name);
    //   })();
    // }, 1500);
  }, []);

  return (
    <>
      <StatusBar animated style="light" />
      <Slot initialRouteName="home"></Slot>
    </>
  );
};

export default _layout;
