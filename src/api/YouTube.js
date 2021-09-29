import axios from "axios";
const KEY = "AIzaSyCzAvGK2YxbzVHJHRab1Fqc1w17O7rxHFs";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    maxResults: 5,
    key: KEY,
  },
});
