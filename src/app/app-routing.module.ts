import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './components/admin/admin.component';
import { HomeComponent } from './components/home/home.component';
import { BookComponent } from './components/book/book.component';
import { BookFormComponent } from './book-form/book-form.component';
import { BooksListComponent } from './books-list/books-list.component';
import { CartComponent } from './components/cart/cart.component';
import { CustomerComponent } from './components/customer/customer.component';
const routes: Routes = [
  {
    path: '',
    component:HomeComponent
  },
  {path: 'books',component:BookFormComponent},
  {path: 'book-list',component:BooksListComponent},
  {path: 'books/:id',component:BookFormComponent},
  {path: 'cart',component:CartComponent},
  {path: 'customer',component:CustomerComponent},
  {
    path: 'admin',
    component:AdminComponent
  }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
