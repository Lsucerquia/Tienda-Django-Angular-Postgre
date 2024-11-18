import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'; 
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './componentes/home/home.component';
import { ProductosComponent } from './componentes/productos/productos.component';
import { LoginComponent } from './componentes/login/login.component';
import { RegistroComponent } from './componentes/registro/registro.component';
import { NavbarComponent } from './componentes/navbar/navbar.component';
import { AcercaComponent } from './componentes/acerca/acerca.component';
import { TestimoniosComponent } from './componentes/testimonios/testimonios.component';



export const routes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent },  
    { path: 'producto/:id', component: ProductosComponent },
    { path: 'acerca-de', component: AcercaComponent },
    { path: 'testimonios', component: TestimoniosComponent },
    { path: 'registro', component: RegistroComponent },
    { path: 'login', component: LoginComponent }

  ];
@NgModule({
  imports: [RouterModule.forRoot(routes),BrowserModule, HttpClientModule],
  exports: [RouterModule],
})
export class AppRoutingModule {}