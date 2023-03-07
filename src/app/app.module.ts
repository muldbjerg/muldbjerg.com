import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { TransferHttpCacheModule } from '@nguniversal/common';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { HeaderComponent } from './components/shared/header/header.component';
import { HerospotComponent } from './components/index/herospot/herospot.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NgxContentfulRichTextModule } from 'ngx-contentful-rich-text';
import { HomeInfoComponent } from './components/index/home-info/home-info.component';
import { ExperienceComponent } from './components/index/experience/experience.component';
import { AboutComponent } from './components/index/about/about.component';
import { FooterComponent } from './components/shared/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HomeInfoComponent,
    HeaderComponent,
    HerospotComponent,
    ExperienceComponent,
    AboutComponent,
    FooterComponent,
  ],
  imports: [
    CommonModule,
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    NgxContentfulRichTextModule,
    TransferHttpCacheModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
