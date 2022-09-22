import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'registro',
    loadChildren: () => import('./registro/registro.module').then( m => m.RegistroPageModule)
  },
  {
    path: 'recuperar',
    loadChildren: () => import('./recuperar/recuperar.module').then( m => m.RecuperarPageModule)
  },
  {
    path: 'inicio-profesor',
    loadChildren: () => import('./inicio-profesor/inicio-profesor.module').then( m => m.InicioProfesorPageModule)
  },
  {
    path: 'inicio-estudiante',
    loadChildren: () => import('./inicio-estudiante/inicio-estudiante.module').then( m => m.InicioEstudiantePageModule)
  },
  {
    path: 'lista',
    loadChildren: () => import('./lista/lista.module').then( m => m.ListaPageModule)
  },
  {
    path: 'lista1',
    loadChildren: () => import('./lista1/lista1.module').then( m => m.Lista1PageModule)
  },
  {
    path: 'asistencia',
    loadChildren: () => import('./asistencia/asistencia.module').then( m => m.AsistenciaPageModule)
  },
  {
    path: 'asistencia1',
    loadChildren: () => import('./asistencia1/asistencia1.module').then( m => m.Asistencia1PageModule)
  },
  {
    path: 'asistencia2',
    loadChildren: () => import('./asistencia2/asistencia2.module').then( m => m.Asistencia2PageModule)
  },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
