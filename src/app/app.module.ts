import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component'; 
import { ConvertToSpacesPipe } from './common/convert-to-spaces.pipe';
import { StarComponent } from './common/star/star.component';
import { ProductDetailComponent } from './products/product-detail/product-detail.component';
import { ProductListComponent } from './products/product-list/product-list.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    ConvertToSpacesPipe,
    StarComponent,
    ProductDetailComponent,
    WelcomeComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule.forRoot([
      { path:'products', component:ProductListComponent},
      { path:'products/:id', component:ProductDetailComponent},
      { path:'welcome', component:WelcomeComponent},
      { path:'', redirectTo:'welcome', pathMatch:'full'},
      { path:'**', redirectTo:'welcome', pathMatch:'full'},
  ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
