
import { ICustomerOrder } from "./customerOrder";
import { Ibook } from "./components/book/book";

export interface IOrderLine {
     id :number;
    price:number;
     book: Ibook[];
     order: ICustomerOrder[];
}