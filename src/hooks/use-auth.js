import { useMutation } from "@tanstack/react-query";
import { login, register, logout } from "@/services/auth";

export function useLogin(){
    return useMutation({
        mutationFn: login,
        onSuccess:(data)=>{
            localStorage.setItem('token', data?.accessToken);
            document.cookie = `token=${data?.accessToken}; path=/;`;
            document.cookie = `role=${data?.role}; path=/;`;
            console.log("Login successful:", data);
        },
        onError:(error)=>{
            console.error("Login failed:", error);
        }
    })
}

export function useRegister(){
    return useMutation({
        mutationFn: register,
        onSuccess:(data)=>{
            console.log("Registration successful:", data);
        },
        onError:(error)=>{
            console.error("Registration failed:", error);
        }
    })
}

export function useLogout(){
    return useMutation({
        mutationFn: logout,
        onSuccess:(data)=>{
            localStorage.removeItem('token');
            document.cookie = "token=; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT;";
            document.cookie = "role=; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT;";
            console.log("Logout successful:", data);
        },
        onError:(error)=>{
            console.error("Logout failed:", error);
        }
    })
}
