import io from "socket.io-client";
import { BACKEND_URL } from "../constants/url";
import { userInfo } from "./localStorage_Utils";

const socket = io(BACKEND_URL, {
    query: {
        token: userInfo?.token,
        userID: userInfo?.id
    }
})

// socket.on('connect', () => {
//     console.log("socket id: " + socket.id)
// })

// socket.on('checkOnlineUsers', (users) => {
    // console.log(users)
// })

socket.on("CONNECTION_ERROR", (err) => {
    if (err.message === "INVALID_USER_ID") console.log('Invalid User Id');
});

export default socket;