import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit {
  todoItems: object[] = []
  newTodo: FormGroup
  description: FormControl

  constructor() { }

  ngOnInit(): void {
    this.todoItems = [
      {
        id: 1,
        createdOn: this.formatDate(new Date(2020, 2, 17)),
        description: "Walk the dog",
        completed: false
      },
      {
        id: 2,
        createdOn: this.formatDate(new Date(2020, 3, 5)),
        description: "Laundry",
        completed: true
      },
      {
        id: 3,
        createdOn: this.formatDate(new Date(2020, 3, 10)),
        description: "Paint my nails",
        completed: false
      }
    ]
  }

  formatDate(date: Date): string {
    let dateArr = date.toString().split(' ')
    return dateArr.slice(0,4).join(' ')
  }

  addTodo(data): void {
    data.id = this.todoItems.length
    data.createdOn = this.formatDate(new Date())
    this.todoItems.push(data)
  }

  deleteTodo(id: number): void {
    // this.todoItems = this.todoItems.filter(item =>item.id != id)
  }

}
