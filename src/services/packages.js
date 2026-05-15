import { api } from "@/lib/axios";

export const getFullPackages = async()=>{
    const response = await api.get('/packages');
    return response.data;
}

export const getAllPackages = async(destination_id)=>{
    const response = await api.get(`/packages/destination/${destination_id}`);
    return response.data;
}

export const getPackageById = async(id)=>{
    const response = await api.get(`/package/${id}`);
    return response.data;
}

export const createPackage = async(data)=>{
    const response = await api.post('/add-package',data,{
        headers:{
            'Content-Type':'multipart/form-data'
        }
    })
    return response.data;
}

export const updatePackage = async({id, data})=>{
    const response = await api.put(`/update-package/${id}`,data,{
        headers:{
            'Content-Type':'multipart/form-data'
        }
    })
    return response.data;
}

export const deletePackage = async(id)=>{
    const response = await api.delete(`/delete-package/${id}`);
    return response.data;
}