import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Boxservice} from '../app/r-box/box.service'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreateBoxComponent } from './create-box/create-box.component';
import { DisplayBoxComponent } from './display-box/display-box.component';
import { RBoxComponent } from './r-box/r-box.component';

@NgModule({
  declarations: [
    AppComponent,
    CreateBoxComponent,
    DisplayBoxComponent,
    RBoxComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [Boxservice],
  bootstrap: [AppComponent]
})
export class AppModule { }
