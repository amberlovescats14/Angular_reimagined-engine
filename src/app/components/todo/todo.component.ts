import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ITodo } from './../../interfaces/itodo';

@Component({
  selector: 'todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit {
  todoItems: ITodo[];
  newTodo: FormGroup
  description: FormControl
  id: FormControl

  constructor() { }

  ngOnInit(): void {
    this.todoItems = [
      {
        id: 1,
        createdOn: this.formatDate(new Date(2020, 2, 17)),
        description: "Walk the dog",
        completed: false,
        editing: false
      },
      {
        id: 2,
        createdOn: this.formatDate(new Date(2020, 3, 5)),
        description: "Laundry",
        completed: true,
        editing: false
      },
      {
        id: 3,
        createdOn: this.formatDate(new Date(2020, 3, 10)),
        description: "Paint my nails",
        completed: false,
        editing: false
      }
    ]

  }

  formatDate(date: Date): string {
    let dateArr = date.toString().split(' ')
    return dateArr.slice(0,4).join(' ')
  }

  addTodo(data): void {
    if(data.description.trim().length == 0) 
      return alert('Description cannot be empty.');
    data.id = this.todoItems.length+1;
    data.createdOn = this.formatDate(new Date())
    data.completed = false;
    data.editing = false;
    this.todoItems.push(data)
  }
  
  updateTodo(data){
    console.log(data)
  }

  deleteTodo(id: number): void {
    this.todoItems = this.todoItems.filter(item =>item.id != id)
  }

  changeDoneState(id: number):void {
    let item: ITodo = this.todoItems.find(todo => todo.id == id)
    console.log(item)
    item.completed = !item.completed
    console.log("item.completed", item.completed)
  }

  changeEditState(id: number): void {
    let item = this.todoItems.find(item => item.id == id);
    item.editing = !item.editing
  }

}


