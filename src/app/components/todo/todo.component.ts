import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit {
  todoItem = [
    {
      createdOn: Date.now(),
      description: "Walk the dog"
    },
    {
      createdOn: Date.now() -2,
      description: "Laundry"
    },
    {
      createdOn: Date.now()-5,
      description: "Paint my nails"
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
