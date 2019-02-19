import { CadastroServicoPage } from './../cadastro-servicos/cadastro-servico';

import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FirebaseService } from '../../services/firebase.service';
import { ServicoService } from '../../services/servico-service';

/**
 * Generated class for the ListaServicosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-lista-servicos',
  templateUrl: 'lista-servicos.html',
})
export class ListaServicosPage {
  params: any = {};
  items: Array<any>;

  constructor(public navCtrl: NavController, public navParams: NavParams,private firebaseService: ServicoService) {
    let that = this;
    that.params.data = {items : []};
    this.firebaseService.getServicos().then(
      res => {
        if(res)
          res.forEach(element => {
            let ob = element.payload.doc.data();
            let item = {
              id: element.payload.doc.id,
              titleHeader : ob.title,
              title : ob.title,
              image : '/assets/images/background/19.jpg',
              subtitle : ob.price,
              description : ob.description,
              button: 'Detalhe',
              shareButton: 'Compartilhar'
            };
            that.params.data.items.push(item);
            console.log(item)
          });
          
      }
    );
    
    this.params.events = {
      'onItemClick': function (item: any) {
        console.log(item);
        that.navCtrl.push(CadastroServicoPage, {"id":item.id});
      },
      'onExplore': function (item: any) {
        console.log("Explore");
      },
      'onShare': function (item: any) {
        console.log("Share");
      },
      'onFab': function (item: any) {
        that.navCtrl.push(CadastroServicoPage);
      },
    };
  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad ListaServicosPage');
  }

}
