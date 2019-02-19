import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the ContatoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-contato',
  templateUrl: 'contato.html',
})
export class ContatoPage {

  params: any = {};
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.params.data = {
      'headerImage':'/assets/images/background/24.jpg',
      'image':'/assets/images/avatar-small/pwf.jpg',
      'title':'PWF',
      'subtitle':'Starting Up Your Business',
      'valueFollowers':'230',
      'followers':'Followers',
      'valueFollowing':'200',
      'following':'Following',
      'valuePosts':'40',
      'posts':'Posts',
      'items' : [{
        'title':'About',
        'subtitle':'Iremos revolucionar o mundo das startups',
        'content':'Contacts',
        'iconPhone':'icon-cellphone-iphone',
        'phone':'+55 11 99898-9898',
        'iconMail':'icon-email',
        'mail':'pwf@pwf.com',
        'iconGlobe':'icon-earth',
        'globe':'pwf.io'
      }],
   
      
      'iconFacebook':'icon-facebook',
      'iconTwitter':'icon-twitter',
      'iconInstagram':'icon-instagram'
    };
    this.params.events = {
      'onItemClick': function(item: any) {
        console.log("onItemClick");
      },
      'onLike': function(item: any) {
        if (item && item.like) {
            if (item.like.isActive) {
                item.like.isActive = false;
                item.like.number--;
            } else {
                item.like.isActive= true;
                item.like.number++;
            }
        }
      },
      'onComment': function(item: any) {
        if (item && item.comment) {
            if (item.comment.isActive) {
                item.comment.isActive = false;
                item.comment.number--;
            } else {
                item.comment.isActive= true;
                item.comment.number++;
            }
        }
      }
    };
  }
  

  ionViewDidLoad() {
    console.log('ionViewDidLoad ContatoPage');
  }

}


/**
 * 
 * data.headerImage
 * data.image
 * data.title
 * data.subtitle
 * data.valueFollowers
 * data.followers
 * data.valueFollowing
 * data.following
 * data.valuePosts
 * data.posts
 * 
 * data.iconFacebook
 * data.iconTwitter
 * data.iconInstagram
 * 
 * data.items
 *  item.title
 *  item.subtitle
 *  item.content
 *  item.iconPhone
 *  item.phone
 *  item.iconMail
 *  item.iconGlobe
 *  item.globe
 * 
 * 
 * 
 * events
 * onFacebook
 * onTwitter
 * onInstagram
 * 
 */