import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { LoginComponent } from './components/login/login.component';

import { BookService } from './services/book.service';
import { NavbarComponent } from './components/navbar/navbar.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { BooksComponent } from './components/books/books.component';

const appRoutes: Routes = [
  { path: '', component: DashboardComponent, pathMatch: 'full'}
  // { path: '', component: DashboardComponent, pathMatch: 'full', canActivate: [AuthGuard] },
  // { path: 'register', component: RegisterComponent, pathMatch: 'full', canActivate: [RegisterGuard] },
  // { path: 'login', component: LoginComponent, pathMatch: 'full' },
  // { path: 'add-client', component: AddClientComponent, pathMatch: 'full', canActivate: [AuthGuard] },
  // { path: 'client/:id', component: ClientDetailsComponent, pathMatch: 'full', canActivate: [AuthGuard] },
  // { path: 'edit-client/:id', component: EditClientComponent, pathMatch: 'full', canActivate: [AuthGuard] },
  // { path: 'settings', component: SettingsComponent, pathMatch: 'full', canActivate: [AuthGuard] },
  // { path: '**', component: PageNotFoundComponent, pathMatch: 'full' }
]

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    LoginComponent,
    NavbarComponent,
    PageNotFoundComponent,
    BooksComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    RouterModule,
    RouterModule.forRoot(appRoutes),
  ],
  providers: [BookService],
  bootstrap: [AppComponent]
})
export class AppModule { }
