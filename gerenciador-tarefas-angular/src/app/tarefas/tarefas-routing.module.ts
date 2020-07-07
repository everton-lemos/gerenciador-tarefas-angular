import { ListarTarefasComponent } from './listar-tarefas/listar-tarefas.component';
import { Routes } from '@angular/router';
import { CadastrarTarefasComponent } from './listar-tarefas/cadastrar-tarefas/cadastrar-tarefas.component';
import { EditarTarefaComponent } from './listar-tarefas/editar-tarefa/editar-tarefa.component';

export const TarefaRoutes: Routes = [
    {
        path: 'tarefas',
        redirectTo: 'tarefas/listar-tarefas'
    },
    {
        path: 'tarefas/listar-tarefas',
        component: ListarTarefasComponent
    },
    {
        path: 'tarefas/listar-tarefas/cadastrar-tarefas',
        component: CadastrarTarefasComponent
    },
    {
        path: 'tarefas/listar-tarefas/editar-tarefa/:id',
        component: EditarTarefaComponent
    }
];
