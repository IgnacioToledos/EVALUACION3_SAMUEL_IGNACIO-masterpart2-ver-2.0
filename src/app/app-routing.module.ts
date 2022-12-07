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
    path: 'segundapagina',
    loadChildren: () => import('./asistenciaM/segundapagina.module').then( m => m.SegundapaginaPageModule)
  },
  {
    path: 'tercerapagina',
    loadChildren: () => import('./asistencia/tercerapagina.module').then( m => m.TercerapaginaPageModule)
  },
  {
    path: 'cuartapagina',
    loadChildren: () => import('./cuartapagina/cuartapagina.module').then( m => m.CuartapaginaPageModule)
  },
  {
    path: 'regristro',
    loadChildren: () => import('./regristro/regristro.module').then( m => m.RegristroPageModule)
  },
  {
    path: 'listado',
    loadChildren: () => import('./listado/listado.module').then( m => m.ListadoPageModule)
  },
  {
    path: 'listadouser',
    loadChildren: () => import('./listadouser/listadouser.module').then( m => m.ListadouserPageModule)
  },
  {
    path: 'inicio',
    loadChildren: () => import('./inicio/inicio.module').then( m => m.InicioPageModule)
  },
  {
    path: 'sesionprofesor',
    loadChildren: () => import('./sesionprofesor/sesionprofesor.module').then( m => m.SesionprofesorPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
