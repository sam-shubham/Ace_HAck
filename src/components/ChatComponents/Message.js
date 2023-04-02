import { View, Text, StyleSheet, Animated, Easing } from "react-native";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import { useEffect, useRef } from "react";
dayjs.extend(relativeTime);

const Message = ({ message, last, next, isTyping }) => {
  const isMyMessage = () => {
    return message.user.id === "u1";
  };

  // const [first, setfirst] = useState(second)

  const dot1Animation = useRef(new Animated.Value(0)).current;
  const dot2Animation = useRef(new Animated.Value(0)).current;
  const dot3Animation = useRef(new Animated.Value(0)).current;

  const startAnimation = () => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(dot1Animation, {
          toValue: 1,
          duration: 1000,
          easing: Easing.linear,
          useNativeDriver: true,
        }),
        Animated.timing(dot1Animation, {
          toValue: 0,
          duration: 1000,
          easing: Easing.linear,
          useNativeDriver: true,
        }),
      ])
    ).start();

    Animated.loop(
      Animated.sequence([
        Animated.timing(dot2Animation, {
          toValue: 1,
          duration: 1000,
          easing: Easing.linear,
          useNativeDriver: true,
          delay: 250,
        }),
        Animated.timing(dot2Animation, {
          toValue: 0,
          duration: 1000,
          easing: Easing.linear,
          useNativeDriver: true,
          delay: 250,
        }),
      ])
    ).start();

    Animated.loop(
      Animated.sequence([
        Animated.timing(dot3Animation, {
          toValue: 1,
          duration: 1000,
          easing: Easing.linear,
          useNativeDriver: true,
          delay: 500,
        }),
        Animated.timing(dot3Animation, {
          toValue: 0,
          duration: 1000,
          easing: Easing.linear,
          useNativeDriver: true,
          delay: 500,
        }),
      ])
    ).start();
  };

  const stopAnimation = () => {
    dot1Animation.stopAnimation();
    dot2Animation.stopAnimation();
    dot3Animation.stopAnimation();
  };

  useEffect(() => {
    if (isTyping) {
      startAnimation();
    } else {
      stopAnimation();
    }
  }, [isTyping]);

  return (
    <View
      style={[
        styles.container,
        {
          backgroundColor: isMyMessage() ? "#fcc5d7" : "white",
          alignSelf: isMyMessage() ? "flex-end" : "flex-start",
          marginBottom: last ? 15 : next.user.id != message.user.id ? 15 : 0,
        },
      ]}
    >
      {isTyping ? (
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <Animated.View
            style={{
              width: 8,
              height: 8,
              borderRadius: 4,
              backgroundColor: "#444",
              marginHorizontal: 4,
              opacity: dot1Animation,
            }}
          />
          <Animated.View
            style={{
              width: 8,
              height: 8,
              borderRadius: 4,
              backgroundColor: "#444",
              marginHorizontal: 4,
              opacity: dot2Animation,
            }}
          />
          <Animated.View
            style={{
              width: 8,
              height: 8,
              borderRadius: 4,
              backgroundColor: "#444",
              marginHorizontal: 4,
              opacity: dot3Animation,
            }}
          />
        </View>
      ) : (
        <>
          <Text className="font-[400] text-black text-[15px]">
            {message.text}
          </Text>
          <Text style={styles.time}>
            {dayjs(message.createdAt).fromNow(true)} ago
          </Text>
        </>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 5,
    padding: 10,
    paddingBottom: 8,
    borderRadius: 10,
    maxWidth: "80%",

    // Shadows
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.18,
    shadowRadius: 1.0,

    elevation: 2,
  },
  time: {
    color: "gray",
    alignSelf: "flex-end",
    fontSize: 10,
  },
});

export default Message;
