import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home';
import { OrdersComponent } from './components/order/order.component';
import { Cart } from './components/cart/cart';
import { NotFoundComponent } from './components/not-found/not-found';
import { AccessDenied } from './components/access-denied/access-denied';
import { AuthGuard } from './services/auth.guard';

export const routes: Routes = [
    {
        path: '',
        component: HomeComponent,
        title: 'Home',
    },
    {
        path: 'myorder',
        component: OrdersComponent,
        title: 'My Orders',
        canActivate: [AuthGuard]
    },
    {
        path: 'cart',
        component: Cart,
        title: 'My Cart',
    },
    {
        path: 'login',
        loadChildren: () => import('./login/login.module').then(m => m.LoginModule),
        title: 'Login'
    },

    {
        path: 'access-denied',
        component: AccessDenied,
        title: 'Access Denied'
    },
    {
        path: '**',
        component: NotFoundComponent,
        title: '404 | Page Not Found'
    },
];
