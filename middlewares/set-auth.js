import axios from "axios"

export const setJwtAuth = async(req, res, next) => {
    const baseUrl = process.env.COMMERCE_LAYER_API_URL
    try {
        const response = await axios.post(`${baseUrl}/oauth/token`, {
            grant_type: "client_credentials",
            client_id: process.env.CLIENT_ID,
            client_secret: process.env.CLIENT_SECRET
        })
        req.headers["Authorization"] = `Bearer ${response.data.access_token}`
        req.headers["Content-Type"] = "application/vnd.api+json"
        next()
    } catch (error) {
        return res.status(403).json({message: "Unauthorized"})
    }
}