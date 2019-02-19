import { Component, Input } from '@angular/core';
import { IonicPage } from 'ionic-angular';

@IonicPage()
@Component({
    selector: 'form-layout-1',
    templateUrl: 'form.html'
})
export class FormLayout1 {
    @Input() data: any;
    @Input() events: any;

    nivel:String;
    name:String;
    title:String;
    description:String;

    constructor() { }

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
            'nivel': this.nivel,
            'title': this.title,
            'description': this.description
        };
    }

    resetValue() {
        this.nivel = "";
        this.title = "";
        this.description = "";
    }
}
