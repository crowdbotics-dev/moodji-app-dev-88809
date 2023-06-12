import axios from "axios"
import { Platform } from "react-native"
console.log(Platform.OS)

if (axios && Platform.OS === "web") {
  axios.defaults.xsrfHeaderName = "X-CSRFTOKEN"
  axios.defaults.xsrfCookieName = "csrftoken"
  axios.defaults.headers.common["X-Requested-With"] = "XMLHttpRequest"
}
