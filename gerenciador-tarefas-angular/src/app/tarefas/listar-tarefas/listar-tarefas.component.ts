import { TarefasService } from './../tarefas.service';
import { Component, OnInit } from '@angular/core';
import { Tarefa } from 'src/app/shared/tarefa.model';

@Component({
  selector: 'app-listar-tarefas',
  templateUrl: './listar-tarefas.component.html',
  styleUrls: ['./listar-tarefas.component.css']
})
export class ListarTarefasComponent implements OnInit {

  tarefas: Tarefa[];

  constructor(private service: TarefasService) { }

  ngOnInit(): void {
    this.tarefas = this.service.listarTodos();
  }

  listarTodos(): Tarefa[] {
    return this.service.listarTodos();
  }

  remover($event: any, tarefa: Tarefa): void {
    $event.preventDefault();
    if (confirm('Deseja remover a tarefa "' + tarefa.nome + '"?'))  {
      this.service.remover(tarefa.id);
      this.tarefas = this.listarTodos();
    }
  }

  alterarStatus(tarefa: Tarefa): void {
    if (confirm('Deseja alterar o status da tarefa "' + tarefa.nome + '"?')) {
      this.service.alterarStatus(tarefa.id);
      this.tarefas = this.listarTodos();
    }
  }


}
