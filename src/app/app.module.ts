import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { TranslationService } from './translation.service';

@NgModule({
  declarations: [
    // outros componentes se necessário
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [TranslationService],
})
export class AppModule { }
