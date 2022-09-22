import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Lista1PageRoutingModule } from './lista1-routing.module';

import { Lista1Page } from './lista1.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Lista1PageRoutingModule
  ],
  declarations: [Lista1Page]
})
export class Lista1PageModule {}
