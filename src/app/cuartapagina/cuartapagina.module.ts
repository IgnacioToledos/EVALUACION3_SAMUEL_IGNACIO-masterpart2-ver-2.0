import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CuartapaginaPageRoutingModule } from './cuartapagina-routing.module';

import { CuartapaginaPage } from './cuartapagina.page';
import { QRCodeModule } from 'angularx-qrcode';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    QRCodeModule,
    CuartapaginaPageRoutingModule
  ],
  declarations: [CuartapaginaPage]
})
export class CuartapaginaPageModule {}
