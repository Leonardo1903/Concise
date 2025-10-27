import api from "./api";

type RegisterData = {
    name: string;
    email: string;
    password: string;
}

type LoginData = {
    email: string;
    password: string;
}

export const register = async (data: RegisterData) => {
    const response = await api.post("/users/register", data);
    return response.data;
}

export const login = async (data: LoginData) => {
    const response = await api.post("/users/login", data);
    return response.data;
} 

export const logout = async () => {
    const response = await api.post("/users/logout");
    return response.data;
}

export const getProfile = async () => {
    const response = await api.get("/users/profile");
    return response.data;
}