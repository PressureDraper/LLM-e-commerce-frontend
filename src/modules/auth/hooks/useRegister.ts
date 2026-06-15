import { useState } from "react";
import { UserRegisterDTO, UserResponse } from "../types/auth.types";
import { userRegister } from "../api/auth.api";

const useRegister = () => {
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);
    const [user, setUser] = useState<UserResponse | null>(null);

    const register = async (data: UserRegisterDTO) => {
        try {
            setLoading(false);
            setError(null);

            const response: UserResponse = await userRegister(data);

            setUser(response);

            return response;
        } catch (error) {
            setError("User registration failed.")
            throw error;
        } finally {
            setLoading(false);
        }
    }

    return {
        register,
        loading,
        error,
        user
    }
}

export default useRegister;