import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { IService } from '../../services/IService';
import { AuthService } from '../../services/auth.service';
import { LoginPage } from '../login/login';

/**
 * Generated class for the RegistroPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-registro',
  templateUrl: 'registro.html',
})
export class RegistroPage {
  service: IService;
  params: any = {};
  errorMessage: string = '';
  successMessage: string = '';


  constructor(public navCtrl: NavController, public navParams: NavParams,private authService: AuthService) {
    this.params.data = {
          "backgroundImage"     : "assets/images/background/registertravel.jpg",
          "logo"                : "assets/images/logo/login-2.png",
          "register"            : "Register",
          "iconAccountMultiple" : "icon-account-multiple",
          "iconHome"            : "icon-home-variant",
          "iconWeb"             : "icon-web",
          "iconLock"            : "icon-lock",
          "iconEmail"           : "icon-email-outline",
          "iconFlag"            : "icon-flag-outline-variant",


          "submit"              : "Submit",

          "toolbarTitle"        : "Register + image",
          "title"               : "Register",
          "background"          : "assets/images/background/34.jpg",
          "password"            : "Enter your password",
          "email"               : "Your e-mail address",
          "lableUsername"       : "USERNAME",
          "lablePassword"       : "PASSWORD",
          "errorPassword"       : "Field can't be empty",
          "errorEmail"          : "Invalid email address"
    };
    let that = this;
    this.params.events = {
        onRegister: function(params) {
              console.log('onRegister');

              that.authService.doRegister(params)
                .then(res => {
                  console.log(res);
                  that.errorMessage = "";
                  that.successMessage = "Your account has been created. Please log in.";
                  that.navCtrl.setRoot(LoginPage);
                }, err => {
                  console.log(err);
                  that.errorMessage = err.message;
                  that.successMessage = "";
                })
        },
        onSkip: function(params) {
            console.log('onSkip');
        }
    };
  }



  ionViewDidLoad() {
    console.log('ionViewDidLoad RegistroPage');
  }

  tryRegister(value){
    this.authService.doRegister(value)
     .then(res => {
       console.log(res);
       this.errorMessage = "";
       this.successMessage = "Your account has been created. Please log in.";
     }, err => {
       console.log(err);
       this.errorMessage = err.message;
       this.successMessage = "";
     })
  }

  goLoginPage(){
    this.navCtrl.pop();
  }

}
