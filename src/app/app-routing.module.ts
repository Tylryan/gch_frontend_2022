import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './components/admin/admin.component';
import { HomeComponent } from './components/home/home.component';
import { BookComponent } from './components/book/book.component';
import { BookFormComponent } from './book-form/book-form.component';
import { CustomerComponent } from './components/customer/customer.component';
import { OrderComponent } from './components/order/order.component';
import { AppComponent } from './app.component';
import { BookService } from './services/book.service';
import { AuthorService } from './services/author.service';
import { CustomerService } from './services/customer.service';
import { PublisherService } from './services/publisher.service';
import { CartComponent } from './components/cart/cart.component';

import { FormsModule } from '@angular/forms';

import { BookDetailComponent } from './book-detail/book-detail.component';
import { ConfirmationComponent } from './confirmation/confirmation.component';
const routes: Routes = [
  {path: '',component:HomeComponent},
  {path: 'home', component: HomeComponent},
  {path: 'books',component:BookComponent},
  {path:'book-detail',component:BookDetailComponent},
  {path:'book-detail/id',component:BookDetailComponent},
  {path: 'books/:id',component:CustomerComponent},
  {path: 'admin',component:AdminComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
