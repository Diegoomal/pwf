import { FormLayoutServicoModule } from './../../components/forms/layout-servico/form-layout-servico.module';
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CadastroServicoPage } from './cadastro-servico';


@NgModule({
  declarations: [
    CadastroServicoPage,
  ],
  imports: [
    IonicPageModule.forChild(CadastroServicoPage),
    FormLayoutServicoModule
  ],
})
export class CadastroServicoPageModule {}
