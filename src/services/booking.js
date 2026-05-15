import { api } from "@/lib/axios";

export const getAllBookings = async()=>{
    const response = await api.get('/bookings');
    return response.data;
}

export const getBookingById = async(id)=>{
    const response = await api.get(`/bookings/${id}`);
    return response.data;
}

export const createBooking = async(data)=>{
    const response = await api.post('/book-package', data);
    return response.data;
}

export const updateBookingStatus = async({id, status})=>{
    const response = await api.put(`/update-booking/${id}`, { status });
    return response.data;
}

export const deleteBooking = async(id)=>{
    const response = await api.delete(`/delete-booking/${id}`);
    return response.data;
}