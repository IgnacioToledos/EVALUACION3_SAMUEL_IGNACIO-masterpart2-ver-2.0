import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { SesionprofesorPageRoutingModule } from './sesionprofesor-routing.module';
import { SesionprofesorPage } from './sesionprofesor.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    SesionprofesorPageRoutingModule
  ],
  declarations: [SesionprofesorPage]
})
export class SesionprofesorPageModule {}
