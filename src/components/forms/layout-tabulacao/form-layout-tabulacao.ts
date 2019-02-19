import { Servico, ServicoService } from './../../../services/servico-service';
import { Component, Input } from '@angular/core';
import { IonicPage } from 'ionic-angular';

@IonicPage()
@Component({
    selector: 'form-layout-tabulacao',
    templateUrl: 'form.html'
})
export class FormLayoutTabulacao {
    @Input() data: any;
    @Input() events: any;

    name:String;
    title:String;
    description:String;
    dataTabulacao:Date;
    idServico:string;
    servico:any;
    valorCobrado:number;
    servicos:any[];

    constructor(private firebaseService: ServicoService) {
        let that = this;
        this.servicos = [];
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
                  that.servicos.push(item);
                  
                });
                
            }
        );
     }

    onEvent(event: string, e: any) {
        if (e) {
            e.stopPropagation();
        }
        if (this.events[event]) {
            this.events[event](this.getItemData());
            this.resetValue();
        }
    }

    getItemData() {
        return {
            'title': this.title,
            'description': this.description,
            'dataTabulacao': this.dataTabulacao,
            'idServico': this.idServico,
            'servico' : this.servico,
            'valorCobrado':this.valorCobrado

        };
    }

    resetValue() {
        this.title = "";
        this.description = "";
        this.idServico = "";
        this.servico = {};
        this.valorCobrado = 0;
        this.dataTabulacao = undefined;
    }
}

