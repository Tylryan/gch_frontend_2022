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
import { RouterModule } from '@angular/router';
import { BookDetailComponent } from './book-detail/book-detail.component';
import { ConfirmationComponent } from './confirmation/confirmation.component';

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
    BookDetailComponent,
    ConfirmationComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
     RouterModule.forRoot([
     {path:'books',component:BookComponent},
     {path:'book-detail',component:BookDetailComponent},
     {path:'book-detail/id',component:BookDetailComponent},
     {path:'books/id',component:BookDetailComponent},
     {path:'customer',component:CustomerComponent},
     {path:'order',component:OrderComponent},
     {path:'home',component:HomeComponent},
     {path:'', redirectTo:'home',pathMatch:'full'},
     {path:'**', redirectTo:'home',pathMatch:'full'}

    
     ]),
    FormsModule
  ],
  providers: [BookService,AuthorService,CustomerService,PublisherService],
  bootstrap: [AppComponent]
})
export class AppModule { }
