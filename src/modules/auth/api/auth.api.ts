import api from "@/lib/globalApi";
import { UserRegisterDTO, UserResponse } from '../types/auth.types';

export const userRegister = async (body: UserRegisterDTO): Promise<UserResponse> => {
    const { data } = await api.post('/api/v1/auth/register', body);

    return data;
}

export const userLogout = async () => {
    await api.post('/api/v1/auth/logout');
}

export const userProfile = async () => {
    const { data } = await api.get('/api/v1/auth/profile');

    return data;
}