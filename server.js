import express from 'express'
import cors from 'cors'
import path from 'path'
import { Server } from 'socket.io'
import { createServer } from 'http'
import { fileURLToPath } from 'url';

import { socket } from './socket.js';

import { COLORS } from './constants/colors.js'

const PORT = process.env.PORT || 4000; 
const HOST = PORT === 4000 
                ? 'localhost'
                : '0.0.0.0'
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

console.log(`${HOST} is host`)

const app = express(); 
const server = createServer(app)
const io = new Server(server, {
    cors: {
        origin: HOST === "localhost"
            ? "http://localhost:4000"
            : "https://react-jack.herokuapp.com/",
        credentials: true,
    }
})

app.listen(PORT, () => console.log(COLORS.cyan, `[INFO] Server listening on port ${PORT}`)); 

server.listen(PORT, HOST, ()  => {
    console.log(COLORS.cyan, `[INFO] Server listening on port ${PORT}`)
    socket({io})
})

app.use(express.static(path.join(__dirname, "/public")));
