import axios from "axios";
import { useNavigate } from "react-router-dom";
import UseAuth from "../useAuth/useAuth";

const axiosSecure = axios.create({
    baseURL: 'http://localhost:5000'
})

const UseAxiosSecure = () => {
    const { logOut } = UseAuth();
    const navigate = useNavigate();


    axiosSecure.interceptors.request.use(function (config) {
        const token = localStorage.getItem('access-token')
        // console.log('request stop byh interceptor', token)
        config.headers.authorization = `Bearer ${token}`
        return config;

    }, function (error) {
        //  do something with request error
        return Promise.reject(error);
    })

    // intercepts 401 and 403 status
    axiosSecure.interceptors.response.use(function (response) {
        return response;
        
    }, async (error) => {
        const status = error.response.status;
        // console.log(status)
        if (status === 401 || status === 401) {
            await logOut();
            navigate('/joinUs')
        }

        return Promise.reject(error);
    })

    return axiosSecure;
};

export default UseAxiosSecure;