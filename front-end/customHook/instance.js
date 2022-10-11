import axios from "axios"

// export const Instance = link => {
//     const instance = axios.create({
//         baseURL: link,
//         timeout: 1000,
//     })
//     return instance
// }

export const instance = axios.create({
    baseURL: "http://localhost:8000",
    timeout: 1000,
    // headers: {}
})