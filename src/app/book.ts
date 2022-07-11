import { AuthorService } from "./services/author.service";
import { PublisherService } from "./services/publisher.service";
import { IAuthor } from "./author";
import { Ipublisher } from "./publisher";

export interface IBook {
    id:number;
     name:string;
     description:string;
     price:number;
     isbn:string;
     language: string;
     author_id: number; 
     authorName:string;
     publisher_id:number ;
     publisherName: string;
     authore:IAuthor[];
     publisher:Ipublisher[];
}