import axios from "axios";

export const getAvatar =  (avatar) => {
    return axios.get(`https://api.dicebear.com/9.x/pixel-art/svg?seed=${avatar}`)
}
