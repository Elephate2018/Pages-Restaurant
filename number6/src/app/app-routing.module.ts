import { NgModule }              from '@angular/core';
import { RouterModule, Routes }  from '@angular/router';
 
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HomeComponent } from './home/home.component';

import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { RewiewComponent } from './rewiew/rewiew.component';



const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'Reviews', component: RewiewComponent},
  { path: '**', component: PageNotFoundComponent }
];
 
@NgModule({
  imports: [
    AngularFontAwesomeModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {}