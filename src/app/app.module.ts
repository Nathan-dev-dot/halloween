import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CreateGroupComponent } from './pages/create-group-component/create-group.component';
import {AppRoutingModule} from "./app-routing.module";
import {FormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import { TitleComponent } from './components/title/title.component';
import {InputComponent} from "./components/input/input.component";
import {BigButtonComponent} from "./components/big-button/big-button.component";

@NgModule({
  declarations: [
    AppComponent,
    CreateGroupComponent,
    TitleComponent,
    InputComponent,
    BigButtonComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
