import { api } from "@/lib/axios";

export const createuser = async(data)=>{
    const response = await api.post('/users', data);
    return response.data;
}

export const getUserById = async(id)=>{
    const response = await api.get(`/user/${id}`);
    return response.data;
}

export const getProfile = async()=>{
    const response = await api.get('/profile');
    return response.data;
}