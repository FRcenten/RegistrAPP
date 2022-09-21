import { Component } from '@angular/core';
import { FormGroup,FormControl,Validator,FormBuilder, Validators } from '@angular/forms';
import { AlertController, NavController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  formularioLogin: FormGroup;

  constructor(public fb: FormBuilder,public alertController:AlertController,public navCtrl: NavController) {
    this.formularioLogin = this.fb.group({
      'cuenta': new FormControl("",Validators.required),
      'contraseña': new FormControl("",Validators.required)
    })

  }
  async ingresar(){
    var f = this.formularioLogin.value;

    var usuario = JSON.parse(localStorage.getItem('usuario'));
     if(usuario.tipo == 'estudiante' || usuario.tipo == 'Estudiante'){

          if(usuario.cuenta == f.cuenta && usuario.contraseña == f.contraseña){
              console.log('ingresar1');
              this.navCtrl.navigateRoot('inicio-estudiante');
          }else{
            const alert = await this.alertController.create({
              header: 'Datos Incorrectos',
              message: 'Los datos que ingresaste no son correctos',
              buttons: ['Aceptar'],
            });
        
            await alert.present();
            return;
          }
     }else if(usuario.tipo == 'profesor' || usuario.tipo == 'Profesor'){
          if(usuario.cuenta == f.cuenta && usuario.contraseña == f.contraseña){
            console.log('ingresar2');
            this.navCtrl.navigateRoot('inicio-profesor');
          }else{
          const alert = await this.alertController.create({
            header: 'Datos Incorrectos',
            message: 'Los datos que ingresaste no son correctos',
            buttons: ['Aceptar'],
          });
      
          await alert.present();
          return;
        }

     }else{
      const alert = await this.alertController.create({
        header: 'Datos Incorrectos',
        message: 'Los datos que ingresaste no son correctos',
        buttons: ['Aceptar'],
      });
  
      await alert.present();
      return;

     }

  }

}
