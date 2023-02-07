import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ServerComponentOne } from './server1/server1.component';
import { ServersComponent } from './servers/servers.component';
import { WarningAlertComponent } from './warning-alert/warning-alert.component';
import { SuccessAlertComponent } from './success-alert/success-alert.component';
import { FormsModule } from '@angular/forms';
import { UsertagComponent } from './usertag/usertag.component'; 

@NgModule({
  declarations: [
    AppComponent,
    ServerComponentOne,
    ServersComponent,
    WarningAlertComponent,
    SuccessAlertComponent,
    UsertagComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
