import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { 
    path: 'graphics', 
    loadChildren: () => import('./graphics/graphics.module').then(m => m.GraphicsModule)
  },
  { path: '**', redirectTo: 'graphics'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
