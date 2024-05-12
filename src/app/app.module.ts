import { NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppComponent } from './app.component';
import { AccountServiceService } from './services/account-service.service';
import { loginGuard } from './services/login.guard';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    // BrowserModule,
  ],
  bootstrap: [AppComponent],
  providers: [AccountServiceService]
})
export class AppModule { }
