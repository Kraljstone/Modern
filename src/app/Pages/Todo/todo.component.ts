import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable, throwError } from 'rxjs';
import { catchError, map, startWith } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { DataService } from 'src/app/Services/get.service';
import { ToDo } from './todo.model';
import { faX } from '@fortawesome/free-solid-svg-icons';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';

export interface User {
  name: string;
}
@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss'],
})
export class TodoComponent {
  myControl = new FormControl<string | User>('');
  isOpen = false;
  textareaValue: string = '';
  createdToDos: ToDo[] = [];
  faX: IconDefinition = faX;

  constructor(private http: HttpClient, private data: DataService) {}

  ngOnInit() {
    this.getData();
  }

  openModal(): boolean {
    return (this.isOpen = true);
  }

  closeModal(): boolean {
    return (this.isOpen = false);
  }

  getData(): void {
    this.data
      .get(
        'https://modern-2b7c0-default-rtdb.europe-west1.firebasedatabase.app/todos.json'
      )
      .pipe(
        map((responseData: { [key: string]: ToDo }) => {
          const toDos: ToDo[] = [];
          for (const key in responseData) {
            if (responseData.hasOwnProperty(key)) {
              toDos.push({ ...responseData[key], id: key });
            }
          }
          return toDos;
        }),
        catchError((error: Error) => {
          return throwError(() => new Error('An error occurred:', error));
        })
      )
      .subscribe({
        next: (toDos) => {
          // Success callback
          this.createdToDos = toDos;
        },
        error: (error: Error) => {
          // Error callback
          return throwError(() => new Error('An error occurred:', error));
        },
      });
  }

  onCreate(): void {
    this.http
      .post(
        'https://modern-2b7c0-default-rtdb.europe-west1.firebasedatabase.app/todos.json',
        {
          todo: this.textareaValue,
        }
      )
      .subscribe(() => {
        this.getData();
      });
  }

  removeToDO(id?: string): void {
    const url: string = `https://modern-2b7c0-default-rtdb.europe-west1.firebasedatabase.app/todos/${id}.json`;

    this.http.delete(url).subscribe({
      next: () => {
        // Success callback
        this.getData();
      },
      error: (error: Error) => {
        // Error callback
        console.error('An error occurred while deleting the item:', error);
      },
    });
  }
}
