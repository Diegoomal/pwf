import { GoogleCardLayoutListaModule } from '../../components/list-view/google-card/layout-lista/google-card-layout-lista.module';
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ListaServicosPage } from './lista-servicos';

@NgModule({
  declarations: [
    ListaServicosPage,
  ],
  imports: [
    IonicPageModule.forChild(ListaServicosPage),
    GoogleCardLayoutListaModule
  ],
})
export class ListaServicosPageModule {}
