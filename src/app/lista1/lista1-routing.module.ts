import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Lista1Page } from './lista1.page';

const routes: Routes = [
  {
    path: '',
    component: Lista1Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Lista1PageRoutingModule {}
