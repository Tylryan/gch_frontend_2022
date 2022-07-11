import { IBook } from "./book";

export interface IAuthor {
     id:number;
    firstName:string;
    lastName:string;
    dateOfBirth:string;
    email:string;
     book: IBook;
}