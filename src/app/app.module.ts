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
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatGridListModule} from '@angular/material/grid-list';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; 
import {MatCardModule} from '@angular/material/card';

import { FormsModule } from '@angular/forms';
import { BooksListComponent } from './books-list/books-list.component';
import { NavbarComponent } from './navbar/navbar.component';
import {MatPaginatorModule} from '@angular/material/paginator';

@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    HomeComponent,
    CartComponent,
    BookComponent,
    OrderComponent,
    CustomerComponent,
    BookFormComponent,
    BooksListComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,HttpClientModule,
    AppRoutingModule,
    FormsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatButtonModule,
    MatIconModule,
    MatGridListModule,
    MatPaginatorModule,
    BrowserAnimationsModule,
    MatCardModule
    
  ],
  providers: [BookService,AuthorService,CustomerService,PublisherService],
  bootstrap: [AppComponent]
})
export class AppModule { }
