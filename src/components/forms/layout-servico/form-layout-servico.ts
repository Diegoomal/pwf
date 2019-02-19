import { Component, Input } from '@angular/core';
import { IonicPage, NavParams } from 'ionic-angular';
import { ServicoService } from '../../../services/servico-service';

@IonicPage()
@Component({
    selector: 'form-layout-servico',
    templateUrl: 'form.html'
})
export class FormLayoutServico{
    @Input() data: any;
    @Input() item: any;
    @Input() events: any;

    price:Number;
    name:String;
    title:String;
    description:String;
    id:string;

    constructor(private firebaseService: ServicoService, private navParams: NavParams) {
        let id = this.navParams.get("id");
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
            'title': this.item.title,
            'description': this.item.description,
            'price': this.item.price
        };
    }

    resetValue() {
        this.item.price = 0;
        this.item.title = "";
        this.item.description = "";
    }

}
