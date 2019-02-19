import { Injectable } from "@angular/core";
import 'rxjs/add/operator/toPromise';
import * as firebase from 'firebase/app';
import 'firebase/storage';
import { AnalyticsFirebaseOriginal } from '@ionic-native/analytics-firebase';

@Injectable()
export class FirebaseAnalytics {

  private snapshotChangesSubscription: any;
  constructor(private analyticsFirebase: AnalyticsFirebaseOriginal) { }

  unsubscribeOnLogOut(){
    //remember to unsubscribe from the snapshotChanges
    // debugger;
    this.snapshotChangesSubscription.unsubscribe();
  }

  setUserProperty(key, value){
    return new Promise<any>((resolve, reject) => {
        let currentUser = firebase.auth().currentUser;
        currentUser.updateProfile({
            displayName: "Sandra",
            photoURL: "http://www.fillmurray.com/g/200/300"
        });
        /* this.analyticsFirebase.setUserProperty(key, value)
            .then(() => console.log('User property successfully set'))
            .catch(err => console.log('Error setting user property:', err));*/
        });
  }

}
