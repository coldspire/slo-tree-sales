import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TreesRoutingModule } from './trees-routing.module';
import { TreesComponent } from './trees.component';
import { TreeComponent } from './tree/tree.component';

@NgModule({
  declarations: [TreesComponent, TreeComponent],
  imports: [
    CommonModule,
    TreesRoutingModule,
  ],
})
export class TreesModule { }
