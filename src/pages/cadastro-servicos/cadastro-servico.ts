import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController, ToastController } from 'ionic-angular';
import { FirebaseService } from '../../services/firebase.service';
import { ServicoService } from '../../services/servico-service';



/**
 * Generated class for the CadastroServicoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-cadastro-servico',
  templateUrl: 'cadastro-servico.html',
})
export class CadastroServicoPage {

  params: any = {};
  isUpdate : boolean = false;
  id:string;
  constructor(private viewCtrl: ViewController, public navCtrl: NavController, public navParams: NavParams,private firebaseService: ServicoService,private toastController: ToastController) {
    let that = this;
    let id = this.navParams.get("id");
    
    
    if(id != undefined){
      that.firebaseService.getServico(id)
          .then(
            res => {
                that.isUpdate = true;
                let ob = res;
                let item = {
                  id: id,
                  title : ob.title,
                  price : ob.price,
                  description : ob.description
                };
                that.params.item = item;
                that.params.data = {button : "Alterar"};
            },
            err => {
              that.presentToast(err.message)
            }
          );
    }else{
      this.params.data = {
        "price": "Preço",
        "title": "Titulo Servico",
        "description": "Detalhes da servico",
        "button": "Inserir"
      };
      this.params.item = {
        price: undefined,
        title: undefined,
        description: undefined,
        button: "Inserir"
      };
    }

    
    this.params.events = {
      "onSubmit": function(value: any) {
        console.log("onSubmit");
        
          let data = {
            title: value.title,
            price: value.price,
            description: value.description
          }
          if(that.isUpdate == true){
            that.firebaseService.atualizarServico(id, data)
            .then(
              res => {
                that.presentToast("Servico cadastrada com sucesso")
              },
              err => {
                that.presentToast(err.message)
              }
            )
          }else{
            that.firebaseService.criarServico(data)
            .then(
              res => {
                that.presentToast("Servico cadastrada com sucesso")
              },
              err => {
                that.presentToast(err.message)
              }
            )
          }
      }
    };
  }

  resetFields(){
    
  }

  dismiss() {
   this.viewCtrl.dismiss();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CadastroServicoPage');
  }

  presentToast(mensagem) {
    const toast = this.toastController.create({
      message: mensagem,
      duration: 2000
    });
    toast.present();
  }

}
