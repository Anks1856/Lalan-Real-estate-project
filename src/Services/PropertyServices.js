import axios from "axios";

const BASE_URL = "http://localhost:8000/Api/properties"

class PropertyServices {

    getAllProperty(pageSize, pageNo){
        return axios.post(BASE_URL + '/getAllProperty' , {  pageSize , pageNo }); 
    }

    getPropertyBySearch(searchObject) {
        return axios.post(BASE_URL + '/getProperyBySearch' ,searchObject);
    }    
}

export default new PropertyServices();