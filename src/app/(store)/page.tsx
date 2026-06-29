'use client'

import useLogout from "@/modules/auth/hooks/useLogout"
import useProfile from "@/modules/auth/hooks/useProfile";

export default function HomePage() {
    const { loading, error, logout } = useLogout();
    const { loading: profileLoading, error: profileError, getProfile, userData } = useProfile();

    return (
        <div className="flex justify-around">
            <button onClick={() => getProfile()} className="rounded border p-1 cursor-pointer">Fetch Profile</button>
            <button onClick={() => logout()} className="rounded border p-1 cursor-pointer">Logout</button>
        </div>
    )
}