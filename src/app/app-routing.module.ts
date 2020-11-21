import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'trees',
    loadChildren: () =>
      import('./trees/trees.module').then((m) => m.TreesModule),
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '/trees',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
