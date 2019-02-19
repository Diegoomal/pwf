import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { RegistroPage } from './registro';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RegisterLayout2Module } from '../../components/register/layout-2/register-layout-2.module';

@NgModule({
  declarations: [
    RegistroPage,
  ],
  imports: [
    IonicPageModule.forChild(RegistroPage),
    RegisterLayout2Module
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class RegistroPageModule {}
