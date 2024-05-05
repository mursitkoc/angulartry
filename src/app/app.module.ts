import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppComponent } from './app.component';
import { HttpClient } from '@angular/common/http';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HttpClient
  ],
  bootstrap: [AppComponent],
  // providers: [HttpClient]
})
export class AppModule { }
