import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './components/admin/admin.component';
import { HomeComponent } from './components/home/home.component';
import { BookComponent } from './components/book/book.component';
import { BookFormComponent } from './book-form/book-form.component';
const routes: Routes = [
  {
    path: '',
    component:BookComponent
  },
  {path: 'books',component:BookFormComponent},
  {path: 'books/:id',component:BookFormComponent},
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
