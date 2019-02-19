import { AngularFireDatabase } from 'angularfire2/database';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { AppSettings } from './app-settings';

@Injectable()
export class HomeService {

    constructor(public af: AngularFireDatabase) { }

    // Set data for - HOME PAGE
    getData = () => {
        return {
            "toolbarTitle": "Sandra Couto English App",
            "title": "Aprenda inglês",
            "subtitle": "De uma vez por todas!",
            "subtitle2": "",
            "link":"",
            "description": "",
            "background": "assets/images/background/29.jpg"
        };
    };

    load(): Observable<any> {
        if (AppSettings.IS_FIREBASE_ENABLED) {
            return new Observable(observer => {
                this.af
                    .object('home')
                    .valueChanges()
                    .subscribe(snapshot => {
                        observer.next(snapshot);
                        observer.complete();
                    }, err => {
                        observer.error([]);
                        observer.complete();
                    });
            });
        } else {
            return new Observable(observer => {
                observer.next(this.getData());
                observer.complete();
            });
        }
    }
}
