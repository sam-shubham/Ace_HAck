import { io } from "socket.io-client";
const socket = io("wss://8d98-118-185-190-60.ngrok.io/api/AppSocket", {
  autoConnect: true,
});
export default socket;
