'use client'

import useLogout from "@/modules/auth/hooks/useLogout"

export default function HomePage() {
    const { loading, error, logout } = useLogout();

    return (
        <div className="flex justify-around">
            <button onClick={() => console.log('fetch')} className="rounded border p-1 cursor-pointer">Fetch Profile</button>
            <button onClick={() => logout()} className="rounded border p-1 cursor-pointer">Logout</button>
        </div>
    )
}