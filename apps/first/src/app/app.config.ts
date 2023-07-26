import {
  ApplicationConfig,
  importProvidersFrom,
  isDevMode,
} from '@angular/core';
import {
  provideRouter,
  withEnabledBlockingInitialNavigation,
} from '@angular/router';
import { appRoutes } from './app.routes';
import { provideAnimations } from '@angular/platform-browser/animations';
import { NgxsModule } from '@ngxs/store';
import { AppState } from './state/app/app.state';
import { provideServiceWorker } from '@angular/service-worker';
import { provideFirebaseApp, getApp, initializeApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { provideAuth, getAuth } from '@angular/fire/auth';
import { AngularFireModule } from '@angular/fire/compat';
import { HttpClientModule } from '@angular/common/http';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(appRoutes, withEnabledBlockingInitialNavigation()),
    provideAnimations(),
    importProvidersFrom(
      NgxsModule.forRoot([AppState], {
        developmentMode: true,
      })
    ),
    importProvidersFrom(
      provideFirebaseApp(() =>
        initializeApp({
          apiKey: 'AIzaSyBBZt9CoG88bBP_EKcPyY_aDxTKAMGdq-Y',
          authDomain: 'firstangular-ba071.firebaseapp.com',
          projectId: 'firstangular-ba071',
          storageBucket: 'firstangular-ba071.appspot.com',
          messagingSenderId: '39836419549',
          appId: '1:39836419549:web:5cbbc2c20fa3776b25a234',
        })
      )
    ),
    importProvidersFrom(
      AngularFireModule.initializeApp({
        apiKey: 'AIzaSyBBZt9CoG88bBP_EKcPyY_aDxTKAMGdq-Y',
        authDomain: 'firstangular-ba071.firebaseapp.com',
        projectId: 'firstangular-ba071',
        storageBucket: 'firstangular-ba071.appspot.com',
        messagingSenderId: '39836419549',
        appId: '1:39836419549:web:5cbbc2c20fa3776b25a234',
      })
    ),
    importProvidersFrom(provideAuth(() => getAuth())),
    importProvidersFrom(provideFirestore(() => getFirestore())),
    importProvidersFrom(HttpClientModule),
    provideServiceWorker('ngsw-worker.js', {
      enabled: !isDevMode(),
      registrationStrategy: 'registerWhenStable:30000',
    }),
  ],
};
