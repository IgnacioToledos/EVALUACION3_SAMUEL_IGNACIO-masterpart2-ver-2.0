import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListadouserPageRoutingModule } from './listadouser-routing.module';

import { ListadouserPage } from './listadouser.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListadouserPageRoutingModule
  ],
  declarations: [ListadouserPage]
})
export class ListadouserPageModule {}
