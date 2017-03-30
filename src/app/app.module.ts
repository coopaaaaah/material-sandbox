import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterialModule } from "@angular/material";
import { FlexLayoutModule } from "@angular/flex-layout";

import {AppComponent, DialogResultExampleDialog} from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    DialogResultExampleDialog
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterialModule,
    FlexLayoutModule
  ],
  providers: [],
  entryComponents: [
    DialogResultExampleDialog
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
