import socket_io_Client from "socket.io-client";
import { BACKEND_URL } from "../constants/url";
import { userInfo } from "./localStorage_Utils";

// console.log(userInfo?.token)
// console.log(userInfo?.id)

const socket = socket_io_Client(BACKEND_URL, {
    query: {
        token: userInfo?.token,
        userID: userInfo?.id
    }
})

console.log(socket)

socket.on('connect', () => {
    console.log("socket id: " + socket.id)
})

socket.on('checkOnlineUsers', (users) => {
    console.log(users)
})

socket.on("CONNECTION_ERROR", (err) => {
    if (err.message === "INVALID_USER_ID") console.log('Invalid User Id');
});

export default socket;