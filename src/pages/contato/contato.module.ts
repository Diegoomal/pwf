import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ContatoPage } from './contato';
import { ProfileLayout5Module } from '../../components/profile/layout-5/profile-layout-5.module';

@NgModule({
  declarations: [
    ContatoPage,
  ],
  imports: [
    IonicPageModule.forChild(ContatoPage),
    ProfileLayout5Module
  ],
})
export class ContatoPageModule {}
