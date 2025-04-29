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
  nextID: number = 1;
  newTask: TodoProps = {
    id: this.nextID++,
    title: '',
    author: '',
    name: '',
    isCompleted: false,
    tags: [''],
    date: new Date(),
  };

  tasks: TodoProps[] = [];

  addTask() {
    if (
      this.newTask.name.trim() &&
      this.newTask.title.trim() &&
      this.newTask.author.trim()
    ) {
    //   this.newTask.tags?.join(' , ');
      this.tasks.push(this.newTask);
      console.log(this.newTask, this.tasks);
      this.newTask = {
        id: this.nextID,
        title: '',
        author: '',
        name: '',
        isCompleted: false,
        tags: [''],
        date: new Date(),
      };
    } else {
      alert('Please enter a task, title and author !');
    }
  }

  deleteTask(id: number) {
    this.tasks.splice(id, 1);
    console.log(id);
  }
  completeTask() {
    this.newTask.isCompleted = !this.newTask.isCompleted;
    console.log(this.newTask);
  }
}
