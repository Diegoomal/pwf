import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CurrencyPipe } from '@angular/common';
import { IonicPageModule } from 'ionic-angular';
import { GoogleCardLayoutLista } from './google-card-layout-lista';

@NgModule({
    declarations: [
        GoogleCardLayoutLista,
    ],
    imports: [
        IonicPageModule.forChild(GoogleCardLayoutLista),
    ],
    exports: [
        GoogleCardLayoutLista
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})

export class GoogleCardLayoutListaModule { }
