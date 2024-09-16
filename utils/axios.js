import axios from "axios";

export const axiosInstance = axios.create({
    baseURL: "https://v12-dev.commercelayer.io/api/",
})

axiosInstance.interceptors.request.use(
    async (config) => {
        const baseUrl = process.env.COMMERCE_LAYER_API_URL;
        const tokenResponse = await axios.post(`${baseUrl}/oauth/token`, {
            grant_type: "client_credentials",
            client_id: process.env.CLIENT_ID,
            client_secret: process.env.CLIENT_SECRET,
        });

        const token = tokenResponse.data.access_token;

        config.headers.Authorization = `Bearer ${token}`;
        config.headers["Content-Type"] = "application/vnd.api+json";
        
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);