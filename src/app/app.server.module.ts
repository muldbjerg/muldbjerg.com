import { NgModule } from '@angular/core';
import {
  ServerModule,
  ServerTransferStateModule,
} from '@angular/platform-server';

import { AppModule } from './app.module';
import { AppComponent } from './app.component';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { ServerStateInterceptor } from './core/services/server-state-interceptor.service';
import { UniversalInterceptor } from './core/services/universal-interceptor.service';

@NgModule({
  imports: [AppModule, ServerModule, ServerTransferStateModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppServerModule {}
