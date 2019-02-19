import { ToastController } from 'ionic-angular';
import { Injectable } from "@angular/core";
import 'rxjs/add/operator/toPromise';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import * as firebase from 'firebase/app';
import 'firebase/storage';
import { Observable } from 'rxjs';

export interface Servico { description: string; title: string; price: string;id: string;}
export interface ServicoId extends Servico { id: string; }

@Injectable()
export class ServicoService {

  private snapshotChangesSubscription: any;
  constructor(public afs: AngularFirestore, private toastController: ToastController){}

  getServicos(){
    return new Promise<any>((resolve, reject) => {
      let currentUser = firebase.auth().currentUser;
      this.snapshotChangesSubscription = this.afs.collection('servicos').snapshotChanges()
      .subscribe(snapshots => {
      
        resolve(snapshots);
      })
    });
  }

  getServico(id){
    return new Promise<any>((resolve, reject) => {
      let currentUser = firebase.auth().currentUser;
      let aula = this.afs.collection('servicos')
            .doc(id)
            .ref
            .get().then(function(doc) {
                if (doc.exists) {
                    resolve(doc.data());
                } else {
                    console.log("No such document!");
                }
            }).catch(function(error) {
                console.log("Error getting document:", error);
            });
      
      
      
    });
  }

  unsubscribeOnLogOut(){
    //remember to unsubscribe from the snapshotChanges
    // debugger;
    this.snapshotChangesSubscription.unsubscribe();
  }

  atualizarServico(servicoKey, value){
    return new Promise<any>((resolve, reject) => {
      let currentUser = firebase.auth().currentUser;
      this.afs.collection('servicos').doc(servicoKey).set(value)
      .then(
        res => resolve(res),
        err => reject(err)
      )
    })
  }

  deletarServico(servicoKey){
    return new Promise<any>((resolve, reject) => {
      let currentUser = firebase.auth().currentUser;
      this.afs.collection('servicos').doc(servicoKey).delete()
      .then(
        res => resolve(res),
        err => reject(err)
      )
    })
  }

  criarServico(value){
      let that = this;
    return new Promise<any>((resolve, reject) => {
      let currentUser = firebase.auth().currentUser;
      this.afs.collection('servicos').add({
        title: value.title,
        description: value.description,
        price : value.price
      })
      .then(
        res => resolve(res),
        err => reject(err)
      )
    })
  }

  encodeImageUri(imageUri, callback) {
    var c = document.createElement('canvas');
    var ctx = c.getContext("2d");
    var img = new Image();
    img.onload = function () {
      var aux:any = this;
      c.width = aux.width;
      c.height = aux.height;
      ctx.drawImage(img, 0, 0);
      var dataURL = c.toDataURL("image/jpeg");
      callback(dataURL);
    };
    img.src = imageUri;
  };

  uploadImage(imageURI, randomId){
    return new Promise<any>((resolve, reject) => {
      let storageRef = firebase.storage().ref();
      let imageRef = storageRef.child('image').child(randomId);
      this.encodeImageUri(imageURI, function(image64){
        imageRef.putString(image64, 'data_url')
        .then(snapshot => {
          snapshot.ref.getDownloadURL()
          .then(res => resolve(res))
        }, err => {
          reject(err);
        })
      })
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
