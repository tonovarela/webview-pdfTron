import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditorComponent } from './editor/editor.component';
import { ListadoComponent } from './listado/listado.component';

const routes: Routes = [{ path: '', component: ListadoComponent, },
{ path: 'editor', component: EditorComponent }, { path: '**', redirectTo: '' }];

@NgModule({
  imports: [RouterModule.forChild(routes)],

  exports: [RouterModule]
})
export class MainRoutingModule { }
