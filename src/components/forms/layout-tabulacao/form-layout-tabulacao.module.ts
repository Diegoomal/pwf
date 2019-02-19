import { ServicoService } from './../../../services/servico-service';
import { FormLayoutTabulacao } from './form-layout-tabulacao';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';



@NgModule({
    declarations: [
        FormLayoutTabulacao,
    ],
    imports: [
        IonicPageModule.forChild(FormLayoutTabulacao),
    ],
    exports: [
        FormLayoutTabulacao
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})

export class FormLayoutTabulacaoModule { }
