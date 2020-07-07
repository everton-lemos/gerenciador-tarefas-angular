import { TarefaConcluidaDirective } from './tarefa-concluida.directive';
import { RouterModule } from '@angular/router';
import { TarefasService } from './tarefas.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ListarTarefasComponent } from './listar-tarefas/listar-tarefas.component';
import { CadastrarTarefasComponent } from './listar-tarefas/cadastrar-tarefas/cadastrar-tarefas.component';
import { EditarTarefaComponent } from './listar-tarefas/editar-tarefa/editar-tarefa.component';




@NgModule({
  declarations: [
  ListarTarefasComponent,
  CadastrarTarefasComponent,
  EditarTarefaComponent,
  TarefaConcluidaDirective
],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule
  ],
  providers: [
    TarefasService
  ]

})
export class TarefasModule { }
