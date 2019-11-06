import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { routing } from './app.routing';
import { HomeComponent } from './home/home.component';
import { DesignComponent } from './design/design.component';
import { EmpComponent } from './emp/emp.component';
import { HttpClientModule } from '@angular/common/http';
import { MDBBootstrapModule, IconsModule, CardsModule } from 'angular-bootstrap-md';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { ContactComponent } from './contact/contact.component';
import { LogoutComponent } from './logout/logout.component';
import { ReversePipe } from './reverse.pipe';
import { WatchComponent } from './watch/watch.component';


@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    HomeComponent,
    DesignComponent,
    EmpComponent,
    ContactComponent,
    LogoutComponent,
    ReversePipe,
    WatchComponent
  ],
  imports: [
    BrowserModule,
    routing,
    HttpClientModule,
    MDBBootstrapModule,
    FormsModule,
    ReactiveFormsModule,
    IconsModule,
    CardsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
