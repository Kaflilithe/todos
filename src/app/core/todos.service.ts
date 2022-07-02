import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export interface TodosDto {
  'userId': number,
  'id': number,
  'title': string,
  'completed': boolean
}

export interface UserDto {
  'id': number,
  'name': string,
  'username': string,
  'email': string,
  'address': {
    'street': string,
    'suite': string,
    'city': string,
    'zipcode': string,
    'geo': {
      'lat': string,
      'lng': string
    }
  },
  'phone': string,
  'website': string,
  'company': {
    'name': string,
    'catchPhrase': string,
    'bs': string
  }
}

@Injectable({
  providedIn: 'root'
})
export class TodosService {
  private url = 'https://jsonplaceholder.typicode.com';

  constructor(
    private http: HttpClient
  ) {
  }

  getUsers() {
    return this.http.get<UserDto[]>(`${this.url}/users`);
  }

  getTodos() {
    return this.http.get<TodosDto>(`${this.url}/todos`);
  }
}
