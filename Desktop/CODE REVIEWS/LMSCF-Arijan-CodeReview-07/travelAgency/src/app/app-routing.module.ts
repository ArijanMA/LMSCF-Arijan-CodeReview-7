import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { BlogComponent } from './blog/blog.component';
import { TravelComponent } from './travel/travel.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { JumbotronComponent } from './jumbotron/jumbotron.component';
import { CartComponent } from './cart/cart.component';

const routes: Routes = [
{
        path: "app-home",component: HomeComponent

},

{
        path: 'app-blog',component: BlogComponent

},

{

        path: 'app-travel',component: TravelComponent

},
{
                 path: 'cart', component: CartComponent
        }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
