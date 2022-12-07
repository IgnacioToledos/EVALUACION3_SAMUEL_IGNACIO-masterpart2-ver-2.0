import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-sesionprofesor',
  templateUrl: './sesionprofesor.page.html',
  styleUrls: ['./sesionprofesor.page.scss'],
})
export class SesionprofesorPage implements OnInit {
  formulariologin: FormGroup;
  constructor(public fb: FormBuilder,
    public alertController: AlertController, public router:Router){
    this.formulariologin = this.fb.group({
      'nombre': new FormControl("",Validators.required),
      'password': new FormControl("",Validators.required)
    })

  }
  ngOnInit() {
  }

   async ingresar2(){
    var f =this.formulariologin.value;
    var usuario = JSON.parse(localStorage.getItem('usuario'));
    if(usuario.nombre == f.nombre && usuario.password == f.password){
      console.log('Ingresado');
      this.router.navigate(['inicio']);
    }else{
      const alert = await this.alertController.create({
        header: 'Datos incorrectos',
        message: 'los datos ingresados no son correctos',
        buttons: ['Aceptar']
      });
      await alert.present();
    }
  }
}
