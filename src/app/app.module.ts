import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { CodePipe } from './pipes/code.pipe';

import { AppComponent } from './app.component';
import { FoxComponent } from './components/fox/fox.component';
import { TerminalComponent } from './components/terminal/terminal.component';

@NgModule({
  declarations: [
    AppComponent,
    TerminalComponent,
    FoxComponent,
    CodePipe
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
