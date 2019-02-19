import { CadastroServicoPage } from './../pages/cadastro-servicos/cadastro-servico';
import { DashboardPage } from './../pages/dashboard/dashboard';
import { ListaServicosPage } from './../pages/lista-servicos/lista-servicos';
import { Component, ViewChild } from '@angular/core';
import { Platform, Nav} from 'ionic-angular';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';


import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { LoginPage } from '../pages/login/login';
import { ContatoPage } from '../pages/contato/contato';



@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = LoginPage;

  pages: Array<any>;

  params:any;
  leftMenuTitle: string;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Home', component: DashboardPage },
      { title: 'Lista Serviços', component: ListaServicosPage },
      { title: 'Contato', component: ContatoPage }
    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}
  