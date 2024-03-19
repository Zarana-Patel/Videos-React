import axios from "axios"

const KEY = "YOUTube_API_Key"

export default axios.create({
  baseURL: "https://youtube.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    maxLength: 5,
    key: KEY,
  },
})
