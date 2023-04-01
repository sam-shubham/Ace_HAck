import { io } from "socket.io-client";
const socket = io("http://192.168.29.96:4000", { autoConnect: false });
export default socket;
