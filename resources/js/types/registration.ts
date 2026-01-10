export interface RegistrationPayload {
    bootcamp_id: number;
    full_name: string;
    email: string;
    phone: string;
    experience_level: 'beginner' | 'intermediate' | 'advanced';
}
