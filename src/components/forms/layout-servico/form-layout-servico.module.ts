import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FormLayoutServico } from './form-layout-servico';

@NgModule({
    declarations: [
        FormLayoutServico,
    ],
    imports: [
        IonicPageModule.forChild(FormLayoutServico),
    ],
    exports: [
        FormLayoutServico
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})

export class FormLayoutServicoModule { }
