import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-asistencia1',
  templateUrl: './asistencia1.page.html',
  styleUrls: ['./asistencia1.page.scss'],
})
export class Asistencia1Page implements OnInit {
  personas : any;
  constructor() { 
    this.personas = [
      {
        id    : 1,
        nombre: 'Juan Vegas',
        edad  : 20,
        foto  : 'https://as01.epimg.net/meristation/imagenes/2021/11/17/noticias/1637173794_754438_1637173828_noticia_normal.jpg'
      },      
      {
        id    : 2,
        nombre: 'Tamara Cofre',
        edad  : 20,
        foto  : 'https://awsimages.detik.net.id/community/media/visual/2020/08/04/scarlett-johansson-8_43.jpeg?w=700&q=90'
      },
      {
        id    : 3,
        nombre: 'Luis Valla',
        edad  : 40,
        foto  : 'https://www.infobae.com/new-resizer/HRNTgbfYHG3_drz6h7lQFjZtM3A=/992x606/filters:format(webp):quality(85)/cloudfront-us-east-1.images.arcpublishing.com/infobae/JUZCUJYV2FCKTGRZ25XTYH3CXE.jpg'
      },
      {
        id    : 4,
        nombre: 'Pedro Araya',
        edad  : 25,
        foto  : 'https://img.freepik.com/foto-gratis/retrato-estudio-hombre-moreno-confianza_1187-5799.jpg?w=2000'
      },      
      {
        id    : 5,
        nombre: 'Andrea Herrera',
        edad  : 29,
        foto  : 'https://image.shutterstock.com/image-photo/happy-young-woman-sitting-on-260nw-2018571389.jpg'
      },
      {
        id    : 6,
        nombre: 'Luis Ascencio',
        edad  : 32,
        foto  : 'https://img.freepik.com/foto-gratis/apuesto-hombre-empresario-sonriendo-alegre_176420-17877.jpg?w=2000'
      }
    ];
  }
  ngOnInit() {
  }

}
