import { Injectable } from "@angular/core";
import 'rxjs/add/operator/toPromise';
import * as firebase from 'firebase/app';
import { FirebaseService } from './firebase.service';
import { ToastController } from "ionic-angular";

@Injectable()
export class AuthService {
  

  constructor(
    private firebaseService: FirebaseService,
    private toastController: ToastController
  ){}

  doRegister(value){
    let that = this
    return new Promise<any>((resolve, reject) => {
      firebase.auth().createUserWithEmailAndPassword(value.email, value.password)
      .then(
        res => resolve(res),
        err => {
          that.presentToast(err.message); 
          reject(err)
        });
    })
  }

  doLogin(value){
    let that = this
    return new Promise<any>((resolve, reject) => {
    firebase.auth().signInWithEmailAndPassword(value.email, value.password)
      .then(
        res => {
          console.log(res);
          resolve(res);
        },
        err => {
          that.presentToast(err.message); 
          reject(err)
      });
    })
  }

  doLogout(){
    let that = this
    return new Promise((resolve, reject) => {
      if(firebase.auth().currentUser){
        firebase.auth().signOut()
        .then(() => {
          this.firebaseService.unsubscribeOnLogOut();
          resolve();
        }).catch((error) => {
          that.presentToast(error.message);
          reject();
        });
      }
    })
  }

  presentToast(mensagem) {
    const toast = this.toastController.create({
      message: mensagem,
      duration: 2000
    });
    toast.present();
  }
}
