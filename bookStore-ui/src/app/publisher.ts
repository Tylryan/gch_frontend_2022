import { Ibook } from "./components/book/book";

export interface Ipublisher {

 id: number;
 name : string;
 address: string;
 phone : string;
books : Ibook;
}
