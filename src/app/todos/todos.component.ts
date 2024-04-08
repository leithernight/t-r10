import { Component, OnInit } from '@angular/core';
import { TodosService } from '../shared/todos.service';
import { delay } from 'rxjs/operators';
import { loadavg } from 'os';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrl: './todos.component.css'
})
export class TodosComponent implements OnInit{
  public loading: boolean = true;
  constructor(public todosService: TodosService) {}
  ngOnInit(): void {
  this.todosService.fetchTodos()
    .pipe(delay(2000))
    .subscribe(() => {
      this.loading = false;
    })
  }
  onChange(id: number) {
    this.todosService.onToggle(id)
  }
  removeTodo(id: number) {
    this.todosService.removeTodo(id)
  }
}
