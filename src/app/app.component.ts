import { CadastroServicoPage } from './../pages/cadastro-servicos/cadastro-servico';
import { DashboardPage } from './../pages/dashboard/dashboard';
import { ListaServicosPage } from './../pages/lista-servicos/lista-servicos';
import { Component, ViewChild, Injector } from '@angular/core';
import { Platform, Nav, Events, MenuController, IonicApp, App } from 'ionic-angular';

import * as moment from "moment";

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
  public user: any;
  public routeHistory: Array<any>;

  constructor(public platform: Platform,  private _app: App,private _ionicApp: IonicApp,public menu: MenuController, public statusBar: StatusBar, public splashScreen: SplashScreen, public _events: Events, protected injector: Injector, private _menu: MenuController) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Home', component: DashboardPage },
      { title: 'Lista Serviços', component: ListaServicosPage },
      { title: 'Contato', component: ContatoPage }
    ];

    this.routeHistory = [];
    this.user = {firstName: ''};

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.

      this._setupBrowserBackButtonBehavior();

      let self = this;
      if (sessionStorage.getItem('user')) {
        this.user = JSON.parse(sessionStorage.getItem('user'));
        self.rootPage = DashboardPage;
      } else {
        self.rootPage = LoginPage;
      }

      this.routeHistory.push(self.rootPage);

      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }


  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario

    // close the menu when clicking a link from the menu
    this.menu.close();
    // navigate to the new page if it is not the current page
    this.nav.setRoot(page.component);
    //store route history
    this.routeHistory.push(page.component);

    this.nav.setRoot(page.component);
  }

  private pushRouteHistory(page: any): void {

      let component: any = page;

      if(page.component) {
          component = page.component;
      }

      if(
          this.routeHistory.length === 0 ||
          this.routeHistory.length > 0 && this.routeHistory[this.routeHistory.length - 1] !== component) {

          this.routeHistory.push(component);
      }
  }

  private _setupBrowserBackButtonBehavior() {

    // Register browser back button action(s)
    window.onpopstate = (evt) => {

      // Close menu if open
      if (this._menu.isOpen()) {
        this._menu.close();
        return;
      }

      if(this._ionicApp) {
          let activePortal: any =
              this._ionicApp._loadingPortal.getActive() ||
              this._ionicApp._modalPortal.getActive() ||
              this._ionicApp._toastPortal.getActive() ||
              this._ionicApp._overlayPortal.getActive();

          if(activePortal) {
              activePortal.dismiss();
              return;
          }
      }

      if(this.routeHistory.length > 1) {

          this.routeHistory.pop();

          if(this.nav.canGoBack()) {
              this.nav.pop().catch((reason) => {
                  console.log("Unable to navigate back:" + reason);
              });
          } else {
              this.nav.setRoot(this.routeHistory[this.routeHistory.length - 1]);
          }
      }


      /* if (this.routeHistory.length > 1) {
        this.routeHistory.pop();
        this.nav.setRoot(this.routeHistory[this.routeHistory.length - 1]);
      } */


    };

    this.nav.viewWillEnter.subscribe((page) => {
        this.pushRouteHistory(page);
    });

    this.nav.viewDidEnter.subscribe((app) => {
        if(this.routeHistory.length > 1) {
            history.pushState(null, null, "");
        }
    });    

    // Fake browser history on each view enter
    /* this._app.viewDidEnter.subscribe((app) => {
      if (this.routeHistory.length > 1) {
        history.pushState(null, null, "");
      }

    }); */

  }

  
}
  