import { Component, OnInit } from '@angular/core';
import { AlertController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-recuperar',
  templateUrl: './recuperar.page.html',
  styleUrls: ['./recuperar.page.scss'],
})
export class RecuperarPage implements OnInit {
  nuevacontra: string;
  repcontra: string;
  mensaje : String;
  constructor(private alertController: AlertController,
              private toastController: ToastController) { }

  ngOnInit() {
  }
  async cambiar(nuevacontra: HTMLInputElement, repcontra: HTMLInputElement)
  {
    if(nuevacontra.value == "")
    {
      this.mensaje = "Falta la nueva contraseña";
      const toast = await this.toastController.create({
        message : "Falta escribir la nueva contraseña",
        duration: 2000
      })
      toast.present();
    }
    else if(repcontra.value == "")
    {
      this.mensaje = "Falta repetir la contrseña";
      const toast = await this.toastController.create({
        message : "Falta repetir la nueva contraseña",
        duration: 2000
      })
      toast.present();
    }
    else
    {
      this.mensaje = "";
      const alert = await this.alertController.create({
        header    : 'Mensaje de la app',
        subHeader : 'Datos ingresados',
        message   : 'Los datos fueron guardados con éxito',
        buttons   : ['Ok'],
      });
      await alert.present();
    }
  }
  
    limpiar(nuevacontra: HTMLInputElement, repcontra: HTMLInputElement)
  {
    nuevacontra.value = "";
    repcontra.value = "";
   
  }
}
