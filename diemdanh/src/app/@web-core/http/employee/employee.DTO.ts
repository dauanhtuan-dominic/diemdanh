import { IPageRequest } from '../global';

export interface IEmployee {
    fullname?: string;
    password?: string;
}

export interface IGetEmployees {
    data: IEmployee[];
}

export interface Role {
    valueView: string;
    value: any;
}

export interface IPageEmployee extends IPageRequest {
    role?: string;
    fullname?:string;
}