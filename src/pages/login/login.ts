import { ListaServicosPage } from './../lista-servicos/lista-servicos';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { IService } from '../../services/IService';
import { RegistroPage } from '../registro/registro';
import { DashboardPage } from '../dashboard/dashboard';
import { HomePage } from '../home/home';
import { AuthService } from '../../services/auth.service';



@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  
    page: any;
    service: IService;
    params: any = {};
    errorMessage: string = '';
    successMessage: string = '';
    
    pageRegistro : any = { title: 'Home', component: RegistroPage };


    constructor(public navCtrl: NavController, public navParams: NavParams,private authService: AuthService) {
        this.params.data = {
            "email": "Email",
            "password": "Password",
            "register": "Register",
            "login": "Login",
            "skip": "Skip",
            "logo": "assets/images/logo/login.png"
        };
        let that = this;

        this.params.events = {
            onLogin: function (params) {
                /* that.navCtrl.setRoot(HomePage); */
                
                that.authService.doLogin(params)
                    .then(res => {
                        that.navCtrl.setRoot(DashboardPage);
                    }, err => {
                        that.errorMessage = err.message;
                    }
                );
                
                
            },
            onRegister: function (params) {
                that.navCtrl.push(RegistroPage);
            },
            onSkip: function (params) {
                console.log('onSkip:' + JSON.stringify(params));
            },
            onFacebook: function (params) {
                console.log('onFacebook:' + JSON.stringify(params));
            },
            onTwitter: function (params) {
                console.log('onTwitter:' + JSON.stringify(params));
            },
            onGoogle: function (params) {
                console.log('onGoogle:' + JSON.stringify(params));
            },
            onPinterest: function (params) {
                console.log('onPinterest:' + JSON.stringify(params));
            },
        };
    }

    ionViewDidLoad() {
        console.log('ionViewDidLoad LoginPage');
    }

}
