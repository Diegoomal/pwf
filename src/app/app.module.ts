import { FormLayoutTabulacao } from './../components/forms/layout-tabulacao/form-layout-tabulacao';
import { GoogleCardLayoutLista } from './../components/list-view/google-card/layout-lista/google-card-layout-lista';
import { LOCALE_ID } from '@angular/core';
import localePtBr from '@angular/common/locales/pt';
import { registerLocaleData } from '@angular/common';
registerLocaleData(localePtBr);
import { FormLayoutServico } from './../components/forms/layout-servico/form-layout-servico';
import { TabulacaoService } from './../services/tabulacao-service';

import { DashboardPage } from './../pages/dashboard/dashboard';

import { ListaServicosPage } from './../pages/lista-servicos/lista-servicos';
import { CadastroServicoPage } from './../pages/cadastro-servicos/cadastro-servico';
import { ServicoService } from './../services/servico-service';
import { GoogleCardLayout2 } from './../components/list-view/google-card/layout-2/google-card-layout-2';
import { NgModule, ErrorHandler, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { MyApp } from './app.component';

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';

import { AppSettings } from '../services/app-settings'
import { ToastService } from '../services/toast-service'
import { LoadingService } from '../services/loading-service'

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { BarcodeScanner } from '@ionic-native/barcode-scanner';
import { Camera } from '@ionic-native/camera';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { LoginPage } from '../pages/login/login';
import { LoginLayout1 } from '../components/login/layout-1/login-layout-1';
import { RegistroPage } from '../pages/registro/registro';

import { RegisterLayout2 } from '../components/register/layout-2/register-layout-2';
import { ContatoPage } from '../pages/contato/contato';
import { ProfileLayout5 } from '../components/profile/layout-5/profile-layout-5';

import { FormLayout1 } from '../components/forms/layout-1/form-layout-1';

import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireStorageModule } from 'angularfire2/storage';
import { FirebaseService } from '../services/firebase.service';
import { AuthService } from '../services/auth.service';
import { AulaService } from '../services/aula-service';

import { ChartsModule } from 'ng2-charts';



@NgModule({
    declarations: [MyApp,
        HomePage,
        ListPage,
        LoginPage,
        LoginLayout1,
        RegistroPage,
        RegisterLayout2,
        ContatoPage,
        ProfileLayout5,
        CadastroServicoPage,
        FormLayout1,
        FormLayoutServico,
        FormLayoutTabulacao,
        ListaServicosPage,
        GoogleCardLayout2,
        GoogleCardLayoutLista,
        DashboardPage],
    providers: [
        StatusBar, SplashScreen, BarcodeScanner, Camera, 
        ToastService, LoadingService, FirebaseService, AuthService,
        ServicoService, AulaService, TabulacaoService,
        {provide: LOCALE_ID, useValue: 'pt-BR'},
        { provide: ErrorHandler, useClass: IonicErrorHandler },
    ],
        imports: [
            BrowserModule,
            ChartsModule,
            HttpModule, HttpClientModule,
            AngularFireModule.initializeApp(AppSettings.FIREBASE_CONFIG),
            AngularFireDatabaseModule,AngularFirestoreModule,
            AngularFireAuthModule,AngularFireStorageModule,
            IonicModule.forRoot(MyApp),
        ],
    bootstrap: [IonicApp],
    entryComponents: [MyApp,
        HomePage,
        ListPage,
        LoginPage,
        LoginLayout1,
        RegistroPage,
        RegisterLayout2,
        ContatoPage,
        ProfileLayout5,
        FormLayout1,
        FormLayoutServico,
        FormLayoutTabulacao,
        CadastroServicoPage,
        DashboardPage,
        ListaServicosPage,
        GoogleCardLayout2,
        GoogleCardLayoutLista],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})

export class AppModule { }
