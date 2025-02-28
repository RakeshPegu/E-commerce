import axios from 'axios'
const apiRequest = new axios.create({
    baseURL: "https://e-commerce-3-gc1t.onrender.com/api",
    withCredentials:true
})
export default apiRequest;