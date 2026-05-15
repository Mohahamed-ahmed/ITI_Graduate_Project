import axios from 'axios'

export const api = axios.create({
    baseURL:process.env.NEXT_PUBLIC_API_BASE_URL,
    withCredentials:true,
    
})

api.interceptors.request.use((config) => {
    const token = localStorage.getItem('token')
    if(token){
        config.headers.Authorization = `Bearer ${token}`
    }
    return config
})

api.interceptors.response.use(

    (response) => {
        return response
    },

    async (error) => {

        const originalRequest = error.config

        // if access token expired
        if(
            error.response?.status === 401 && 
            !originalRequest._retry &&
            originalRequest.url !== '/auth/refresh-token' &&
            originalRequest.url !== '/auth/logout'

        ){

            originalRequest._retry = true

            try{

                // call refresh token endpoint
                const response = await api.post('/auth/refresh-token')
                const newAccessToken = response.data.accessToken 
                localStorage.setItem('token', newAccessToken)
                // update old request token
                originalRequest.headers.Authorization = `Bearer ${newAccessToken}`

                // retry original request
                return api(originalRequest)

            }catch(refreshError){

                // refresh token failed => logout user
                localStorage.removeItem('token')
                localStorage.removeItem('role')

                window.location.href = '/login'

                return Promise.reject(refreshError)
            }
        }

        return Promise.reject(error)
    }
)