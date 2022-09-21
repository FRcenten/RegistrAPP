import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl,Validator,FormBuilder, Validators } from '@angular/forms';
import { AlertController,NavController,ToastController } from '@ionic/angular';
@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit {
  formularioRegistro: FormGroup;
  constructor(public fb: FormBuilder, public alertController:AlertController,public navCtrl: NavController) {

    this.formularioRegistro = this.fb.group({
      'tipo': new FormControl("",Validators.required),
      'cuenta': new FormControl("",Validators.required),
      'contraseña': new FormControl("",Validators.required),
      'confirmarContraseña': new FormControl("",Validators.required)
    })
   }

  ngOnInit() {
  }
  async guardar(){
    var f = this.formularioRegistro.value;
    if(this.formularioRegistro.invalid){
      const alert = await this.alertController.create({
        header: 'Datos Incompletos',
        message: 'Tienes que llenar todos los datos',
        buttons: ['Aceptar'],
      });
  
      await alert.present();
      return;
      }else{
        this.navCtrl.navigateRoot('home');
        const alert = await this.alertController.create({
          header: 'Correcto',
          message: 'Datos ingresados correctamente',
          buttons: ['Aceptar'],
        });
    
        await alert.present();
      }
      var usuario = {
        tipo: f.tipo ,
        cuenta: f.cuenta,
        contraseña: f.contraseña
      }
    localStorage.setItem('usuario',JSON.stringify(usuario));
  }
}
