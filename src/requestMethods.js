import axios from "axios";

const BASE_URL ="https://myparty55.herokuapp.com/api/"
const TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzYTlkMzFjNTI2MGI0M2EzNWZkYTA4ZiIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY3MjE0ODY2MSwiZXhwIjoxNjcyNDA3ODYxfQ.lzqUJmw-fMFKuePvbofghtlFzFaluPRdKV32FH-Gx1I"

export const publicRequest = axios.create({
    baseURL:BASE_URL
})

export const userRequest = axios.create({
    baseURL:BASE_URL,
    header:{token:`Bearer ${TOKEN}`}
})