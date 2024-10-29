import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ProductListComponent } from './product-list/product-list.component';



export const routes: Routes = [
    {
        path: 'login',component: LoginComponent
    },
    {
        path: '',redirectTo:'/login',pathMatch: 'full'
    },
    { path: 'products', component: ProductListComponent },  // เส้นทางสำหรับ ProductListComponent
  { path: '', redirectTo: '/products', pathMatch: 'full' },  // เส้นทางเริ่มต้น (ไปที่ /products)
];


