import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlogPageComponent } from './blog-page/blog-page.component';
import { HomePageComponent } from './home-page/home-page.component';
import { TravelsPageComponent } from './travels-page/travels-page.component';
import { TravelDetailsComponent } from './travel-details/travel-details.component';
import { CartComponent } from './cart/cart.component';
import { ContactUsPageComponent } from './contact-us-page/contact-us-page.component';

const routes: Routes = [
  {
    path: "", component: HomePageComponent
  }, {
    path: "blog", component: BlogPageComponent
  }, {
    path: "travels", component: TravelsPageComponent
  }, {
    path: "travels/products/:productId", component: TravelDetailsComponent
  }, {
    path: "cart", component: CartComponent
  }, {
    path: "contactUs", component: ContactUsPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
