import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { FoxComponent } from './components/fox/fox.component';
import { TerminalComponent } from './components/terminal/terminal.component';
import { BlinkerComponent } from './components/blinker/blinker.component';

@NgModule({
  declarations: [
    AppComponent,
    BlinkerComponent,
    TerminalComponent,
    FoxComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
