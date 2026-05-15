import { useMutation, useQuery } from "@tanstack/react-query";
import { getProfile, getUserById,createuser } from "@/services/user";

export function useCreateUser(){
    return useMutation({
        mutationFn: createuser,
        
    })
}

export function useGetUserById(id){
    return useQuery({
        queryFn:()=>getUserById(id),
        queryKey:['user', id],
    })
}

export function useGetProfile(){
    return useQuery({
        queryFn: getProfile,
        queryKey:['profile'],
        retry:false,
    })
}