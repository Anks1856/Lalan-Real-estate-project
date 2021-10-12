import axios from "axios";

const BASE_URL = "http://localhost:8000/Api/auth"

// const header = {
//     'x-access-token' : localStorage.getItem('token')
// };
// , {headers : header}

class AuthServices {

    register(userDetails){
        return axios.post(BASE_URL + "/register" , userDetails );
    }
    loing(loginDetails){
        return  axios.post(BASE_URL + "/login" , loginDetails);
    }
}

export default new AuthServices();