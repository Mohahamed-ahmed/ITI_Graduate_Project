import { api } from "@/lib/axios";


export const getAllDestinations = async()=>{
    const response = await api.get('/destinations');
    return response.data;
}

export const getDestinationById = async(id)=>{
    const response = await api.get(`/destination/${id}`);
    return response.data;
}

export const createDestination = async (data)=>{
    const response = await api.post('/add-destination', data,{
        headers:{
            'Content-Type':'multipart/form-data'
        }
    });
    return response.data;
}

export const updateDestination = async({id, data})=>{
    const response = await api.put(`/update-destination/${id}`, data,{
        headers:{
            'Content-Type':'multipart/form-data'
        }
    });
    return response.data;
}

export const deleteDestination = async(id)=>{
    const response = await api.delete(`/delete-destination/${id}`);
    return response.data;
}

