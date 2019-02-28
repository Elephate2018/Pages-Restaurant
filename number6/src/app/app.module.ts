import { NgModule }       from '@angular/core';
import { BrowserModule, Title }  from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';
 
import { AppComponent }     from './app.component';
import { AppRoutingModule } from './app-routing.module';
 
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HomeComponent } from './home/home.component';
import { RewiewComponent } from './rewiew/rewiew.component';

 
@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  declarations: [
    AppComponent,
    PageNotFoundComponent,
    HomeComponent,
    RewiewComponent,
  ],
  providers: [
    Title
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }