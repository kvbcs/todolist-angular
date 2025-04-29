import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TodoProps } from './types';

@Component({
  selector: 'app-todo',
  imports: [FormsModule],
  templateUrl: './todo.component.html',
  styleUrl: './todo.component.css',
})
	
export class TodoComponent {
	
  newTask: TodoProps = {
    name: '',
    isCompleted: false,
    date: new Date(),
  };

  tasks: TodoProps[] = [];

  addTask() {
    if (
      this.newTask.name &&
      this.newTask.name !== null &&
      this.newTask.name !== undefined &&
      this.newTask.name !== '' &&
      this.newTask.name.trim()
    ) {
      this.tasks.push(this.newTask);
      console.log(this.newTask, this.tasks);
    } else {
		alert('Please enter a task !');
    }
  }
  deleteTask(index: number) {
    this.tasks.splice(index, 1);
    console.log(index);
  }
  completeTask() {
    this.newTask.isCompleted = !this.newTask.isCompleted;
    console.log(this.newTask);
  }
}
