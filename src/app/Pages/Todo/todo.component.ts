import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { DataService } from 'src/app/Services/get.service';
import { ToDo } from './todo.model';
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
  options: User[] = [{ name: 'Mary' }, { name: 'Shelley' }, { name: 'Igor' }];
  filteredOptions: Observable<User[]> = new Observable<User[]>();
  isOpen = false;
  textareaValue: string = '';
  createdToDos: ToDo[] = [];

  constructor(private http: HttpClient, private data: DataService) {}

  ngOnInit() {
    this.filteredOptions = this.myControl.valueChanges.pipe(
      startWith(''),
      map((value) => {
        const name = typeof value === 'string' ? value : value?.name;
        return name ? this._filter(name as string) : this.options.slice();
      })
    );
    this.getData();
  }

  displayFn(user: User): string {
    return user && user.name ? user.name : '';
  }

  private _filter(name: string): User[] {
    const filterValue = name.toLowerCase();

    return this.options.filter((option) =>
      option.name.toLowerCase().includes(filterValue)
    );
  }

  openModal() {
    this.isOpen = true;
  }

  closeModal() {
    this.isOpen = false;
  }

  getData() {
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
        })
      )
      .subscribe({
        next: (toDos) => {
          // Success callback
          this.createdToDos = toDos;
        },
        error: (error) => {
          // Error callback
          console.error('An error occurred:', error);
        },
      });
  }

  onCreate() {
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


}
