import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ShortenPipe } from './pipes/shorten.pipe';
import { FilterPipe } from './pipes/filter.pipe';
import { FormsModule } from '@angular/forms';
import { SortPipe } from './pipes/sort.pipe';
import { ReversePipe } from './pipes/reverse.pipe';



@NgModule({
  declarations: [
    AppComponent,
   ShortenPipe,
   FilterPipe,
   SortPipe,
   ReversePipe 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
