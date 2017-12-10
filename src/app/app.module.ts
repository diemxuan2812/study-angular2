import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { HomeComponent} from './home/home.component';

import { ExponentialStrengthPipe} from './pipes/exponential-strength.pipe';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ExponentialStrengthPipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
