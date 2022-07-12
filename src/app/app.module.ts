import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { HeaderComponent } from './components/shared/header/header.component';
import { HerospotComponent } from './components/index/herospot/herospot.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ContentfulApiService } from './core/services/contentful-api.service';
import { CommonModule } from '@angular/common';
import { BlogComponent } from './pages/blog/blog.component';
import { PostComponent } from './pages/blog/post/post.component';
import { NgxContentfulRichTextModule } from 'ngx-contentful-rich-text';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    HerospotComponent,
    BlogComponent,
    PostComponent,
  ],
  imports: [
    CommonModule,
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    NgxContentfulRichTextModule,
  ],
  providers: [ContentfulApiService],
  bootstrap: [AppComponent],
})
export class AppModule {}
