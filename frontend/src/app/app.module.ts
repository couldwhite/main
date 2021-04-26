import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatSelectModule} from '@angular/material/select';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import { HttpClientModule }   from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { MyOrdersComponent } from './my-orders/my-orders.component';
import {RouterModule, Routes} from "@angular/router";
import { MainPageComponent } from './main-page/main-page.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";

const appRoutes: Routes = [
  {path: '', component: MainPageComponent},
  {path: 'my_orders', component: MyOrdersComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    MyOrdersComponent,
    MainPageComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    MatSelectModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes),
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
