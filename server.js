import express from 'express'
import cors from 'cors'
import { Server } from 'socket.io'
import { createServer } from 'http'

import { socket } from './socket.js';

import { COLORS } from './constants/colors.js'


const PORT = process.env.PORT || 4000; 
const HOST = process.env.HOST || 'localhost'

const app = express(); 
const server = createServer(app)
const io = new Server(server, {
    cors: {
        origin: "http://localhost:4000",
        credentials: true,
    }
})

app.listen(PORT, () => console.log(COLORS.cyan, `[INFO] Server listening on port ${PORT}`)); 

server.listen(PORT, HOST, ()  => {
    console.log(COLORS.cyan, `[INFO] Server listening on port ${PORT}`)
    socket({io})
})

app.use(express.static("public"));