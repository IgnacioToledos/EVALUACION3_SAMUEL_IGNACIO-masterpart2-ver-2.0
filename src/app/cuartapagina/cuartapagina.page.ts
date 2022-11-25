import { Component, OnInit } from '@angular/core';
import { Camera, CameraResultType } from '@capacitor/camera';
import { BarcodeScanner } from '@ionic-native/barcode-scanner/ngx';


@Component({
  selector: 'app-cuartapagina',
  templateUrl: './cuartapagina.page.html',
  styleUrls: ['./cuartapagina.page.scss'],
})
export class CuartapaginaPage implements OnInit {
  picture: string;
  qrCodeString = 'ALUMNO REGISTRADO';
  code: any;
  constructor(private barcodeScanner: BarcodeScanner) {

  }

  async takepicture() {
    const image = await Camera.getPhoto({
      quality: 100,
      allowEditing: false,
      resultType: CameraResultType.DataUrl
    });
    
    this.picture = image.dataUrl;
  }

  ngOnInit() {
  }

  scan(){
    this.barcodeScanner.scan().then(barcodeData => {
      this.code = barcodeData.text;
      console.log('Barcode data', this.code);
    }).catch(err => {
        console.log('Error', err);
    });
    
  }

}
