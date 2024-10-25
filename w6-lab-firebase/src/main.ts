import { bootstrapApplication } from '@angular/platform-browser';
import { RouteReuseStrategy, provideRouter, withPreloading, PreloadAllModules } from '@angular/router';
import { IonicRouteStrategy, provideIonicAngular } from '@ionic/angular/standalone';

import { routes } from './app/app.routes';
import { AppComponent } from './app/app.component';

bootstrapApplication(AppComponent, {
  providers: [
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    provideIonicAngular(),
    provideRouter(routes, withPreloading(PreloadAllModules)),
    provideFirebaseApp(() => initializeApp({
      projectId: "fir-ionic-project-dc52e",
      appId: "1:769063483414:web:0b402d09efd31d324dca57",
      storageBucket: "fir-ionic-project-dc52e.appspot.com",
      apiKey: "AIzaSyDibzo0p2mUnQmjN6RlfXlHjbgkzSIUjFY",
      authDomain: "fir-ionic-project-dc52e.firebaseapp.com",
      messagingSenderId: "769063383314"
    })),
    provideAuth(() => getAuth()),
    provideFirestore(() => getFirestore()),
  ],
});
function provideFirebaseApp(arg0: () => any): import("@angular/core").Provider | import("@angular/core").EnvironmentProviders {
  throw new Error('Function not implemented.');
}

function initializeApp(arg0: { projectId: string; appId: string; storageBucket: string; apiKey: string; authDomain: string; messagingSenderId: string; }) {
  throw new Error('Function not implemented.');
}

function provideAuth(arg0: () => any): import("@angular/core").Provider | import("@angular/core").EnvironmentProviders {
  throw new Error('Function not implemented.');
}

function getAuth() {
  throw new Error('Function not implemented.');
}

function provideFirestore(arg0: () => any): import("@angular/core").Provider | import("@angular/core").EnvironmentProviders {
  throw new Error('Function not implemented.');
}

function getFirestore() {
  throw new Error('Function not implemented.');
}

