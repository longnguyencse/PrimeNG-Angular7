import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {ColorPickerModule} from 'primeng/colorpicker';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FormsModule} from '@angular/forms';
import {PasswordModule} from 'primeng/password';
import {ButtonModule} from 'primeng/button';

import {SplitButtonModule} from 'primeng/splitbutton';
import {AppComponent} from './app.component';
import {NameComponent} from './path/name/name.component';
import {MessageComponent} from './shared/message/message.component';

@NgModule({
  declarations: [
    AppComponent,
    NameComponent,
    MessageComponent
  ],
  imports: [
    BrowserModule,
    ColorPickerModule,
    SplitButtonModule,
    ButtonModule,
    PasswordModule,
    ButtonModule,
    BrowserAnimationsModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  color: string;
}
