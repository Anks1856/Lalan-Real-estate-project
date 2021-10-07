import axios from "axios";

const BASE_URL = "http://localhost:8000/Api"

// const header = {
//     'x-access-token' : localStorage.getItem('token')
// };
// , {headers : header}
class AuthServices {

    register(userDetails){
        return axios.post(BASE_URL + "/auth/register" , userDetails );
    }
    loing(loginDetails){
        return  axios.post(BASE_URL + "/auth/login" , loginDetails);
    }
}

export default new AuthServices();