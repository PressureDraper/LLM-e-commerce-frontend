export interface UserRegisterDTO {
    email: string;
    password: string;
    full_name: string;
}

export interface UserResponse {
    id: number;
    email: string;
    full_name: string | null;
    role: "admin" | "customer";
    is_active: boolean;
    is_verified: boolean;
    avatar_url: string | null;
    created_at: string;
}