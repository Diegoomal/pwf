import { ToastController } from 'ionic-angular';
import { Injectable } from "@angular/core";
import 'rxjs/add/operator/toPromise';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import * as firebase from 'firebase/app';
import 'firebase/storage';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

export interface Aula { description: string; title: string; nivel: string;}
export interface AulaId extends Aula { id: string; }

@Injectable()
export class AulaService {

  private snapshotChangesSubscription: any;
  constructor(public afs: AngularFirestore, private toastController: ToastController){}

  getAulas(){
    return new Promise<any>((resolve, reject) => {
      let aulasCollection: AngularFirestoreCollection<Aula>;
      let aulas: Observable<AulaId[]>;
      let currentUser = firebase.auth().currentUser;
      aulasCollection = this.afs.collection('people').doc(currentUser.uid).collection<Aula>('aulas');
      console.log(aulasCollection);
      /* aulas = aulasCollection.stateChanges(['added']).pipe(
        map(actions => actions.map(a => {
          const data = a.payload.doc.data() as Aula;
          const id = a.payload.doc.id;
          resolve({ id, ...data });
        }))
      ); */
      /* this.snapshotChangesSubscription = this.afs.collection('people').doc(currentUser.uid).collection('aulas').snapshotChanges()
      .subscribe(snapshots => {
      
        resolve(snapshots);
      }) */
    });
  }

  getAula(id){
    return new Promise<any>((resolve, reject) => {
      let aulasCollection: AngularFirestoreDocument<{}>;
      let aulas: Observable<AulaId[]>;
      let currentUser = firebase.auth().currentUser;
      aulasCollection = this.afs.collection('people').doc(currentUser.uid).collection<Aula>('aulas').doc(id);
      
      /* aulas = aulasCollection.stateChanges(['added']).pipe(
        map(actions => actions.map(a => {
          const data = a.payload.doc.data() as Aula;
          const id = a.payload.doc.id;
          resolve({ id, ...data });
        }))
      ); */
      /* this.snapshotChangesSubscription = this.afs.collection('people').doc(currentUser.uid).collection('aulas').snapshotChanges()
      .subscribe(snapshots => {
      
        resolve(snapshots);
      }) */
    });
  }

  /* getAula(id){
    return new Promise<any>((resolve, reject) => {
      let currentUser = firebase.auth().currentUser;
      this.snapshotChangesSubscription = this.afs.collection('people').doc(currentUser.uid).collection('aulas').doc(id).snapshotChanges()
      .subscribe(snapshots => {
      
        resolve(snapshots);
      })
    });
  } */

  unsubscribeOnLogOut(){
    //remember to unsubscribe from the snapshotChanges
    // debugger;
    this.snapshotChangesSubscription.unsubscribe();
  }

  atualizarAula(aulaKey, value){
    return new Promise<any>((resolve, reject) => {
      let currentUser = firebase.auth().currentUser;
      this.afs.collection('people').doc(currentUser.uid).collection('tasks').doc(aulaKey).set(value)
      .then(
        res => resolve(res),
        err => reject(err)
      )
    })
  }

  deletarAula(aulaKey){
    return new Promise<any>((resolve, reject) => {
      let currentUser = firebase.auth().currentUser;
      this.afs.collection('people').doc(currentUser.uid).collection('aulas').doc(aulaKey).delete()
      .then(
        res => resolve(res),
        err => reject(err)
      )
    })
  }

  criarAula(value){
      let that = this;
    return new Promise<any>((resolve, reject) => {
      let currentUser = firebase.auth().currentUser;
      this.afs.collection('people').doc(currentUser.uid).collection('aulas').add({
        nivel: value.nivel,
        title: value.title,
        description: value.description
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
