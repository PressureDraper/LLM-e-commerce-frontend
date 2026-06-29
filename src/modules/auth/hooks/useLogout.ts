import { useState } from "react"
import { userLogout } from "../api/auth.api";


const useLogout = () => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const logout = async () => {
        try {
            setLoading(true);
            setError(null);

            await userLogout();
        } catch (error) {
            setError('Failed to logout');
            throw error;
        } finally {
            setLoading(false);
        }
    }

    return {
        loading,
        error,
        logout
    }
}

export default useLogout;