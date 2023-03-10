import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainRoutingModule } from './main-routing.module';
import { ListadoComponent } from './listado/listado.component';
import { EditorComponent } from './editor/editor.component';


@NgModule({
  declarations: [
    ListadoComponent,
    EditorComponent
  ],
  imports: [
    CommonModule,
    MainRoutingModule
  ]
})
export class MainModule { }
