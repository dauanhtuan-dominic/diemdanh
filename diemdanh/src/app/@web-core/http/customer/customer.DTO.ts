import { IPageRequest } from '../global';

export interface ICustomer {
    fullname?: string;
    password?: string;
}

export interface IGetCustomers {
    data: ICustomer[];
}

export interface Role {
    valueView: string;
    value: any;
}

export interface IPageCustomer extends IPageRequest {
    role?: string;
    fullname?:string
}