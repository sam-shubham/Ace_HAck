// import React from "react";

// import React, { useState } from "react";
// import AgoraUIKit, { PropsInterface } from "agora-rn-uikit";
// import { PermissionsAndroid, Platform, View } from "react-native";
// import {
//   ClientRoleType,
//   createAgoraRtcEngine,
//   IRtcEngine,
//   RtcSurfaceView,
//   ChannelProfileType,
// } from "react-native-agora";

import axios from "axios";
import React, { useRef, useState, useEffect } from "react";
import { SafeAreaView, ScrollView, StyleSheet, Text, View } from "react-native";
import { PermissionsAndroid, Platform } from "react-native";
import {
  ClientRoleType,
  createAgoraRtcEngine,
  IRtcEngine,
  RtcSurfaceView,
  ChannelProfileType,
} from "react-native-agora";

const appId = "482d960646b8406d9b603d03aca68500";
const channelName = "MyChannel";
// const token =
//   "006482d960646b8406d9b603d03aca68500IADZNlciQuUd4mfhjmWzTQm2GvwHOa9hVn+zPiedXtIib+AS44oAAAAAEABoRSUFlCsqZAEAAQAk6Chk";
// const uid = 0;

const videocall = () => {
  const agoraEngineRef = useRef(null); // Agora engine instance
  const agoraViewRef = useRef(null); // Agora engine instance
  const [isJoined, setIsJoined] = useState(false); // Indicates if the local user has joined the channel
  const [remoteUid, setRemoteUid] = useState(2); // Uid of the remote user
  const [token, settoken] = useState(null);
  const [message, setMessage] = useState("");
  const [uid, setuid] = useState(1);

  useEffect(() => {
    (async () => {
      try {
        let { data } = await axios.get(
          `https://agora-token-service-production-a416.up.railway.app/rtc/MyChannel/test1/uid/${uid}/? `
        );

        if (data && data.rtcToken) {
          settoken(data.rtcToken);
        }
      } catch (e) {
        console.log(e);
      }
    })();
  }, []);

  function showMessage(msg) {
    setMessage(msg);
  }

  const getPermission = async () => {
    if (Platform.OS === "android") {
      await PermissionsAndroid.requestMultiple([
        PermissionsAndroid.PERMISSIONS.RECORD_AUDIO,
        PermissionsAndroid.PERMISSIONS.CAMERA,
      ]);
    }
  };

  useEffect(() => {
    // Initialize Agora engine when the app starts
    setupVideoSDKEngine();
  });

  const setupVideoSDKEngine = async () => {
    try {
      // use the helper function to get permissions
      if (Platform.OS === "android") {
        await getPermission();
      }
      agoraEngineRef.current = createAgoraRtcEngine();
      const agoraEngine = agoraEngineRef.current;
      agoraEngine.registerEventHandler({
        onJoinChannelSuccess: () => {
          showMessage("Successfully joined the channel " + channelName);
          setIsJoined(true);
        },
        onUserJoined: (_connection, Uid) => {
          showMessage("Remote user joined with uid " + Uid);
          setRemoteUid(Uid);
          //   agoraEngineRef.current.setupRemoteVideo(agoraViewRef);
        },
        onUserOffline: (_connection, Uid) => {
          showMessage("Remote user left the channel. uid: " + Uid);
          setRemoteUid(0);
        },
      });
      agoraEngine.initialize({
        appId: appId,
        channelProfile: ChannelProfileType.ChannelProfileCommunication,
      });
      agoraEngine.enableVideo();
    } catch (e) {
      console.log(e);
    }
  };

  const join = async () => {
    if (isJoined || false) {
      return;
    }

    try {
      let { data } = await axios.get(
        `https://agora-token-service-production-a416.up.railway.app/rtc/MyChannel/test1/uid/${uid}/? `
      );

      if (data && data.rtcToken) {
        settoken(data.rtcToken);
      }
    } catch (e) {
      console.log(e);
    }

    try {
      agoraEngineRef.current?.setChannelProfile(
        ChannelProfileType.ChannelProfileCommunication
      );
      agoraEngineRef.current?.startPreview();
      agoraEngineRef.current?.joinChannel(token, channelName, uid, {
        clientRoleType: ClientRoleType.ClientRoleBroadcaster,
      });
    } catch (e) {
      console.log(e);
    }
  };

  const leave = () => {
    try {
      agoraEngineRef.current?.leaveChannel();
      setRemoteUid(0);
      setIsJoined(false);
      showMessage("You left the channel");
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <View className="" style={styles.main}>
      <Text style={styles.head}>Agora Video Calling Quickstart</Text>
      <View style={styles.btnContainer}>
        <Text
          onPress={() => {
            setuid(1);
            join();
          }}
          style={styles.button}
        >
          Join
        </Text>
        <Text
          onPress={() => {
            setuid(2);
            join();
          }}
          style={styles.button}
        >
          Join (Docter)
        </Text>
        <Text onPress={leave} style={styles.button}>
          Leave
        </Text>
      </View>
      <ScrollView
        style={styles.scroll}
        contentContainerStyle={styles.scrollContainer}
      >
        {isJoined || true ? (
          <React.Fragment key={1}>
            <RtcSurfaceView
              canvas={{ uid: 1 }}
              className="w-[600px] h-[500px] bg-black"
            />
            <Text>Local user uid: {uid}</Text>
          </React.Fragment>
        ) : (
          <Text>Join a channel</Text>
        )}
        {(isJoined && remoteUid !== uid) || true ? (
          <React.Fragment key={remoteUid}>
            <RtcSurfaceView
              ref={agoraViewRef}
              canvas={{ uid: remoteUid }}
              style={{ width: 200, height: 200 }}
            />
            <Text>Remote user uid: {remoteUid}</Text>
          </React.Fragment>
        ) : (
          <Text>Waiting for a remote user to join</Text>
        )}
        <Text style={styles.info}>{message}</Text>
      </ScrollView>
    </View>
  );

  //   return (
  //     <View>
  //       <Text>videocall</Text>
  //     </View>
  //   );

  const [videoCall, setVideoCall] = useState(true);
  const props = {
    connectionData: {
      appId: appId,
      channel: channelName,
    },
    rtcCallbacks: {
      EndCall: () => setVideoCall(false),
    },
  };

  //   return videoCall ? (
  //     <AgoraUIKit
  //       connectionData={props.connectionData}
  //       rtcCallbacks={props.rtcCallbacks}
  //     />
  //   ) : null;
};

const styles = StyleSheet.create({
  button: {
    paddingHorizontal: 25,
    paddingVertical: 4,
    fontWeight: "bold",
    color: "#ffffff",
    backgroundColor: "#0055cc",
    margin: 5,
  },
  main: { flex: 1, alignItems: "center" },
  scroll: { flex: 1, backgroundColor: "#ddeeff", width: "100%" },
  scrollContainer: { alignItems: "center" },
  //   videoView: { width: "90%", height: 200 },
  btnContainer: { flexDirection: "row", justifyContent: "center" },
  head: { fontSize: 20 },
  info: { backgroundColor: "#ffffe0", color: "#0000ff" },
});

export default videocall;
