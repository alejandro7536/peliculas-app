import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'

import { AppComponent } from './app.component';
import { PagesModule } from './pages/pages.module';
import { PipesModule } from './pipes/pipes.module';
import { RoutingModule } from './routing.module';
import { ComponentsModule } from './components/components.module';
import { GoogleTagManagerModule } from 'angular-google-tag-manager';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    PagesModule,
    PipesModule,
    HttpClientModule,
    RoutingModule,
    ComponentsModule,
    GoogleTagManagerModule.forRoot({
      id: 'GTM-NLXMFDD',
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
