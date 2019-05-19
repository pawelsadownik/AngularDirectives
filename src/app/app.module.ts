import { TextColorDirective } from './text-color.directive';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FullUserNamePipe } from './fullname.pipe';
import { CountPipe} from './count.pipe';
import { RepeatPipe } from './repeat.pipe';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    TextColorDirective,
    FullUserNamePipe,
    CountPipe,
    RepeatPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
