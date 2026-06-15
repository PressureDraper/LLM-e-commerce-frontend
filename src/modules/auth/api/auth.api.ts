import api from "@/lib/globalApi";
import { UserRegisterDTO, UserResponse } from '../types/auth.types';

export const userRegister = async (body: UserRegisterDTO): Promise<UserResponse> => {
    const { data } = await api.post('/api/v1/auth/register', body);

    return data;
}