export interface RegistrationData {
    email: string;
    password?: string;
    firstName: string;
    lastName: string;
    dob: {
        month: string;
        day: string;
        year: string;
    };
    city: string;
    postalCode: string;
    state: string;
    address: string;
    phone: string;
}

export type RegistrationStep = 1 | 2 | 3 | 'success';
