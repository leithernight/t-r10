import { Component, OnInit } from '@angular/core';
import { Todo, TodosService } from '../shared/todos.service';

@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrl: './todo-form.component.css'
})
export class TodoFormComponent implements OnInit {
  title: string = '';
  constructor(public TodosService: TodosService) {}
  ngOnInit(): void {}
  addTodo() {
    const todo: Todo = {
      title: this.title,
      id: Date.now(),
      completed: false,
      date: new Date
    }
    this.TodosService.addTodo(todo)
    this.title = ''
  }
}
