import { NgModule, ApplicationRef } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { FormsModule } from '@angular/forms';

/*
 * Platform and Environment providers/directives/pipes
 */
import { routing } from './app.routing'
// App is our top level component
import { AppComponent } from './app.component';
import { APP_RESOLVER_PROVIDERS } from './app.resolver';
import { AppState, InternalStateType } from './app.service';

// Core providers
import {CoreModule} from "./core/core.module";
import {SmartadminLayoutModule} from "./shared/layout/layout.module";


import { ModalModule } from 'ngx-bootstrap/modal';

import { AlertService, AuthenticationService, UserService } from './services/index';
import { AlertComponent } from './_directives/index';
import { AuthGuard } from './+auth/guard/index';
import { JwtInterceptorProvider, ErrorInterceptorProvider } from './helper/index';
import { HomeComponent } from './+home/index';
import { LoginComponent } from './+auth/+login/index';

// Application wide providers
const APP_PROVIDERS = [
  ...APP_RESOLVER_PROVIDERS,
  AppState
];

type StoreType = {
  state: InternalStateType,
  restoreInputValues: () => void,
  disposeOldHosts: () => void
};

/**
 * `AppModule` is the main entry point into Angular2's bootstraping process
 */
@NgModule({
  bootstrap: [ AppComponent ],
  declarations: [
    AppComponent,
    AlertComponent,
    HomeComponent,
    LoginComponent

  ],
  imports: [ // import Angular's modules
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ModalModule.forRoot(),
    CoreModule,
    SmartadminLayoutModule,
    routing
  ],
  exports: [
  ],
  providers: [ // expose our Services and Providers into Angular's dependency injection
    // ENV_PROVIDERS,
    APP_PROVIDERS,
    AuthGuard,
    AlertService,
    AuthenticationService,
    UserService,
    JwtInterceptorProvider,
    ErrorInterceptorProvider
  ]
})
export class AppModule {
  constructor(public appRef: ApplicationRef, public appState: AppState) {}


}

