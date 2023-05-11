export interface Student {
    name: string,
    lastName: string,
    birthday: string,
    address: string
    educationLevel: string,
    gender: string,
    email: string,
    phoneNumber: number,
    isActive: boolean,
    id: string,
}

export interface Students extends Array<Student>{}

export interface User {
    email: string,
    password: string,
    id: string,
}

export interface Users extends Array<User>{}

