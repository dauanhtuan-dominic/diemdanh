import { IPageRequest } from '../global';

export class IPageOrder extends IPageRequest {
    status?: string;
    email?:string;
    code?:string;
}

export interface Status {
    valueView: string;
    value: any;
}