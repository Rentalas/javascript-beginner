export interface User {
    name: string;
    id: number;
    message?: any;
}

export type User2 = {
    name: string;
    id: number;
}

export interface User5 {
    name: string;
    id: number;
    changeName(str: string): void;
}

export enum InputType {
    Text = 'text',
    Dropdown = 'dropdown',
}

export type Union = User | string;