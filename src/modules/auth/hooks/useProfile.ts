import { useState } from "react"
import { userProfile } from "../api/auth.api";

const useProfile = () => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const [userData, setUserData] = useState<string | null>(null);

    const getProfile = async () => {
        try {
            setLoading(true);
            setError(null);

            const response = await userProfile();

            setUserData(response);

            return response;
        } catch (error) {
            setError('Failed to fetch user data');
            throw error;
        } finally {
            setLoading(false);
        }
    }

    return {
        getProfile,
        userData,
        loading,
        error
    }
}

export default useProfile;