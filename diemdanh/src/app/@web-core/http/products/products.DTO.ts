import { IPageRequest } from '../global';

export class IPageProduct extends IPageRequest {
    product_type?: string;
    name?:string
}
export interface Price {
    valueView: string;
    value: any;
}
