import axios, { AxiosInstance } from "axios";
// Axios instance creation
const api = async (): Promise<AxiosInstance> => {
    return axios.create({
        baseURL: `https://9e06da9a-97cf-4701-adfc-9b9a5713bbb9.mock.pstmn.io/`,
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
        },
    });
};

export default api;