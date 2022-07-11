import { IOrderLine } from "./orderline";
export interface ICustomerOrder {
id: number;
orderDate: string;
status: string;
order: IOrderLine[] ;
}