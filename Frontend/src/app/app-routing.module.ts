import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './navigation/home/home.component';
import { SearchComponent } from './navigation/search/search.component';
import { OfferComponent } from './navigation/offer/offer.component';
import { ManageComponent } from './navigation/manage/manage.component';
import { PageNotFoundComponent } from './navigation/page-not-found/page-not-found.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'search',
    component: SearchComponent
  },
  {
    path: 'offer/:id',
    component: OfferComponent
  },
  {
    path: 'manage',
    component: ManageComponent
  },
  {
    path: 'not-found',
    component: PageNotFoundComponent
  },
  {
    path: '**',
    redirectTo: 'not-found',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{
    enableTracing: true,
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
