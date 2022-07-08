import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BookService } from './services/book.service';
import { AuthorService } from './services/author.service';
import { CustomerService } from './services/customer.service';
import { PublisherService } from './services/publisher.service';
import { AdminComponent } from './components/admin/admin.component';
import { HomeComponent } from './components/home/home.component';
import { CartComponent } from './components/cart/cart.component';
import { BookComponent } from './components/book/book.component';
import { OrderComponent } from './components/order/order.component';
import { CustomerComponent } from './components/customer/customer.component';
import { BookFormComponent } from './book-form/book-form.component';

import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    HomeComponent,
    CartComponent,
    BookComponent,
    OrderComponent,
    CustomerComponent,
    BookFormComponent
  ],
  imports: [
    BrowserModule,HttpClientModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [BookService,AuthorService,CustomerService,PublisherService],
  bootstrap: [AppComponent]
})
export class AppModule { }
