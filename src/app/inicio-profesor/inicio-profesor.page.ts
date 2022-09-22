import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inicio-profesor',
  templateUrl: './inicio-profesor.page.html',
  styleUrls: ['./inicio-profesor.page.scss'],
})
export class InicioProfesorPage implements OnInit {
  imagen : any;
  constructor() { }

  ngOnInit() {
  }
  codigoQR(num: number){
    if(num == 1){
      this.imagen =  "/assets/mate.png";
    }else if(num == 2){
      this.imagen =  "/assets/len.png";
    }else{
      this.imagen = "/assets/ingles.png";
    }
    return this.imagen;
  }

}

