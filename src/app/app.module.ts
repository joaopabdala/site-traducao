import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { TranslationService } from './translation.service';
import { TextDetailComponent } from './text-detail/text-detail.component';


@NgModule({
  declarations: [
    TextDetailComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
  ],
  providers: [TranslationService],
})
export class AppModule { }
