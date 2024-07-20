import axios from "axios"
const BaseUrl=axios.create({
    baseURL:import.meta.env.VITE_BACKEND_URL ,
    
    headers: {
      "Access-Control-Allow-crossorigin":"true",
       'Content-Type': 'application/json',
      },
})

export default BaseUrl